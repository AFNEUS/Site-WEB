# 🗄️ Backend - config/database.js

## Qu'est-ce que c'est ?
C'est le fichier qui **établit la connexion** à PostgreSQL. Comme brancher le câble à la base de données.

## Comment ça marche ?

### 1️⃣ Imports
```javascript
import { Pool } from 'pg';
```
**Pool** = gère plusieurs connexions à la base en même temps (plus efficace)

### 2️⃣ Création du Pool
```javascript
const pool = new Pool({
  host: process.env.DB_HOST,        // localhost (en dev)
  port: process.env.DB_PORT,        // 5432
  database: process.env.DB_NAME,    // afneus_dev
  user: process.env.DB_USER,        // postgres
  password: process.env.DB_PASSWORD // secret
});
```

### 3️⃣ Événements
```javascript
pool.on('connect', () => {
  console.log('✅ Connecté à PostgreSQL');
});

pool.on('error', (err) => {
  console.error('❌ Erreur:', err);
});
```

### 4️⃣ Export
```javascript
export default pool;
```
Permet à d'autres fichiers d'utiliser : `import pool from './config/database.js'`

## 🎯 Utilisation dans les routes :

```javascript
// Dans une route, faire une requête SQL :
const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
const user = result.rows[0];
```

## ⚠️ Avant de l'utiliser :

1. **Avoir PostgreSQL installé et lancé**
2. **Créer une base de données `afneus_dev`**
3. **Remplir le fichier `.env`** avec les bonnes infos

```bash
# Vérifier que PostgreSQL tourne :
psql -U postgres -c "SELECT version();"
```

## 🔧 À savoir :
- **Pool** maintient plusieurs connexions ouvertes = plus rapide
- **$1, $2, etc.** = protection contre les injections SQL
- Les requêtes sont **asynchrones** (await)
