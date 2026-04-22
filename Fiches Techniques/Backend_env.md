# 🔐 Backend - .env.example

## Qu'est-ce que c'est ?
C'est un **fichier modèle** qui montre toutes les variables d'environnement que tu dois configurer.

## Pourquoi ".example" ?
- Le fichier `.env` réel (avec les vrais secrets) n'est **JAMAIS commité** sur Git
- `.env.example` montre la structure sans les secrets
- Chaque développeur crée son propre `.env` en copiant `.env.example`

## Les variables expliquées :

### 📡 Serveur
```env
PORT=3000              # Le port où tourne le serveur
NODE_ENV=development   # "development" ou "production"
```

### 🗄️ Base de Données
```env
DB_HOST=localhost      # Où est PostgreSQL (localhost en dev)
DB_PORT=5432           # Port PostgreSQL par défaut
DB_NAME=afneus_dev     # Nom de ta base de données
DB_USER=postgres       # Utilisateur PostgreSQL
DB_PASSWORD=...        # Mot de passe
```

### 🔑 Sécurité (JWT)
```env
JWT_SECRET=your_secret_key    # Clé secrète pour signer les tokens
JWT_EXPIRES_IN=7d             # Les tokens expirent après 7 jours
```

### 🌐 CORS
```env
CORS_ORIGIN=...  # Domaines autorisés à faire des requêtes (Angular, etc.)
```

## ⚠️ À faire après la création :

```bash
# 1. Duplique le fichier
cp .env .env

# 2. Remplis les valeurs réelles dans .env
# 3. Ajoute .env au .gitignore ⚠️
echo ".env" >> .gitignore
```

## 🚨 Sécurité importante :
- **JAMAIS** commiter `.env` avec les vrais secrets
- En production, utiliser les variables d'environnement du serveur OVH
