# 🚀 Backend - server.js

## Qu'est-ce que c'est ?
C'est le **cœur du serveur** - c'est ici que tout démarre. C'est comme le `main()` en informatique.

## Ce qu'il fait étape par étape :

### 1️⃣ Imports
```javascript
import express from 'express';      // Framework web
import cors from 'cors';             // Autorise Angular
import dotenv from 'dotenv';         // Charge .env
```

### 2️⃣ Chargement des variables d'environnement
```javascript
dotenv.config();  // Lit le fichier .env
```

### 3️⃣ Création de l'app Express
```javascript
const app = express();
```

### 4️⃣ Configuration du CORS
```javascript
app.use(cors({
  origin: ...,           // Autorise les domaines
  credentials: true      // Autorise les cookies
}));
```

### 5️⃣ Middleware
```javascript
app.use(express.json());             // Parse JSON
app.use(express.urlencoded({ ... })); // Parse formulaires
```

### 6️⃣ Les Routes (à uncomment plus tard)
```javascript
// app.use('/api/users', userRoutes);        // Routes utilisateurs
// app.use('/api/associations', associationRoutes);
// app.use('/api/news', newsRoutes);
```

### 7️⃣ Route de test
```javascript
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend OK ✅' });
});
```
**Sert à tester que le serveur fonctionne** : `curl http://localhost:3000/api/health`

### 8️⃣ Gestion des erreurs
```javascript
app.use((err, req, res, next) => {
  // Si quelque chose crashe, retourne une erreur au client
  res.status(500).json({ error: 'Erreur serveur' });
});
```

### 9️⃣ Démarrage du serveur
```javascript
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
```

## 🎯 À savoir :
- Express = framework web (comme Spring Boot en Java, Django en Python)
- Les routes sont définies avec `app.get()`, `app.post()`, `app.put()`, `app.delete()`
- Chaque requête passe par les middlewares avant d'atteindre la route

## Pour tester :
```bash
npm run dev
# Puis dans un navigateur : http://localhost:3000/api/health
```
