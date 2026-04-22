# 📦 Backend - package.json

## Qu'est-ce que c'est ?
C'est le fichier qui liste **toutes les dépendances** (bibliothèques) que ton serveur Node.js va utiliser.

## Les dépendances principales :

| Package | Utilité |
|---------|---------|
| **express** | Framework web pour créer l'API |
| **pg** | Pilote PostgreSQL pour parler à la base de données |
| **dotenv** | Charge les variables d'environnement depuis `.env` |
| **jsonwebtoken** | Crée et vérifie les tokens JWT (authentification) |
| **bcryptjs** | Chiffre les mots de passe (sécurité) |
| **cors** | Autorise les requêtes depuis Angular (cross-origin) |
| **express-validator** | Valide les données reçues |

## Les scripts utiles :

```json
"start": "node server.js"     // Lance le serveur
"dev": "nodemon server.js"    // Relance auto si tu modifies le code
"migrate": "node scripts/migrate.js"  // Crée les tables dans la BDD
```

## ⚠️ À faire après la création :

```bash
cd backend
npm install    // Installe toutes les dépendances
```

## Pour démarrer en développement :
```bash
npm run dev
```
