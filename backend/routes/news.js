import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// GET toutes les news
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT n.*, u.nom, u.prenom, a.nom as association_nom
      FROM news n
      JOIN users u ON n.auteur_id = u.id
      LEFT JOIN associations a ON n.association_id = a.id
      ORDER BY n.date DESC
    `);
    res.json(result.rows);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(500).json({ error: message });
  }
});

// GET une news par ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`
      SELECT n.*, u.nom, u.prenom, a.nom as association_nom
      FROM news n
      JOIN users u ON n.auteur_id = u.id
      LEFT JOIN associations a ON n.association_id = a.id
      WHERE n.id = $1
    `, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'News non trouvée' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue';
    res.status(500).json({ error: message });
  }
});

export default router;

