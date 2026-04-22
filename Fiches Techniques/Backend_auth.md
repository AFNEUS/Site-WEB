# 🔐 Backend - middleware/auth.js

## Qu'est-ce que c'est ?
Les **middlewares** = des fonctions qui "filtrent" les requêtes avant qu'elles n'arrivent aux routes.
Ce fichier gère **l'authentification et les permissions**.

## Les 5 fonctions principales :

### 1️⃣ `verifyToken` - Vérifie que l'utilisateur a un JWT valide

```javascript
app.get('/api/protected', verifyToken, (req, res) => {
  // Si le JWT est bon, req.user contient les infos
  console.log(req.user.id, req.user.role);
});
```

**Qu'il fait :**
- Extrait le token du header `Authorization: Bearer TOKEN`
- Le décode avec la clé secrète
- Si valide → ajoute l'utilisateur à `req.user`
- Si invalide → erreur 401 "Unauthorized"

---

### 2️⃣ `requireSuperAdmin` - Vérifie que c'est un super-admin

```javascript
app.delete('/api/users/:id', verifyToken, requireSuperAdmin, (req, res) => {
  // Seul un super-admin peut supprimer
});
```

**Retourne :**
- ✅ Si `req.user.role === 'super-admin'` → continue
- ❌ Sinon → erreur 403 "Forbidden"

---

### 3️⃣ `requireBureau` - Vérifie que c'est bureau ou super-admin

```javascript
app.post('/api/news', verifyToken, requireBureau, (req, res) => {
  // Seul bureau + super-admin peuvent créer des actus
});
```

---

### 4️⃣ `requireAssoAdmin` - Vérifie que c'est asso-admin ou super-admin

```javascript
app.put('/api/associations/:id', verifyToken, requireAssoAdmin, (req, res) => {
  // Modifier une asso
});
```

---

### 5️⃣ `generateToken` - Crée un JWT

```javascript
const token = generateToken(userId, 'bureau');
// Retourne quelque chose comme :
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJyb2xlIjoiYnVyZWF1In0..."
```

**Utilisé pendant la connexion :**
- L'utilisateur se connecte (email + password)
- Le backend vérifie le password
- Le backend envoie un JWT au client
- Le client stocke le JWT et l'envoie avec chaque requête

---

## 🎯 Flux d'authentification complet :

```
1. Utilisateur clique "Connexion"
   ↓
2. Envoie email + password au backend
   ↓
3. Backend vérifie les identifiants
   ↓
4. Backend crée un JWT avec generateToken()
   ↓
5. Backend envoie le JWT au client
   ↓
6. Client stocke le JWT (localStorage)
   ↓
7. À chaque requête, client envoie : "Authorization: Bearer TOKEN"
   ↓
8. Backend vérifie le token avec verifyToken
   ↓
9. Si bon → continue, sinon → erreur 401
```

---

## 🔒 À savoir sur JWT :

**JWT = 3 parties séparées par des points :**
- **Header** : type d'algorithme (HS256)
- **Payload** : les données (id, role, expiration)
- **Signature** : preuve que c'est valide (calculé avec la clé secrète)

**Avantages :**
- ✅ Pas besoin de stocker les sessions sur le serveur
- ✅ Scalable (fonctionne bien en production)
- ✅ Léger

**Sécurité :**
- ⚠️ JWT contient des données visibles (mais signées)
- ⚠️ Ne mets JAMAIS de données sensibles dedans
- ⚠️ Change `JWT_SECRET` en production !

---

## 📝 Exemple d'utilisation dans une route :

```javascript
import { verifyToken, requireSuperAdmin, generateToken } from '../middleware/auth.js';

// Route de connexion (pas besoin de token)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Vérifier l'email et le password
  // ...
  
  // Créer et envoyer le token
  const token = generateToken(user.id, user.role);
  res.json({ token, user });
});

// Route protégée (besoin de token)
app.get('/api/profile', verifyToken, (req, res) => {
  res.json({ user: req.user });
});

// Route super-admin only
app.delete('/api/users/:id', verifyToken, requireSuperAdmin, (req, res) => {
  // Supprimer l'utilisateur
});
```

---

## 🚀 À retenir :
- `verifyToken` = vérifie que tu as un JWT valide
- `require*` = vérifie que tu as le bon rôle
- `generateToken` = crée un JWT au login
- Les middlewares s'empilent : `verifyToken, requireSuperAdmin, (req, res) => {...}`
