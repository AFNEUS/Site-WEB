import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Charge les variables d'environnement
dotenv.config();

// Imports des routes
import newsRoutes from './routes/news.js';
// import userRoutes from './routes/users.js';
// import associationRoutes from './routes/associations.js';

const app = express();
const PORT = process.env.PORT || 3000;

// === MIDDLEWARE ===
app.use(cors({
  origin: ['http://localhost:4200', 'http://localhost:3000', 'https://afneus.fr'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// === ROUTES ===
// app.use('/api/users', userRoutes);
// app.use('/api/associations', associationRoutes);
app.use('/api/news', newsRoutes);

// Route de test
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend OK ✅', timestamp: new Date() });
});

// === GESTION DES ERREURS ===
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur', message: err.message });
});

// === DÉMARRAGE DU SERVEUR ===
app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});
