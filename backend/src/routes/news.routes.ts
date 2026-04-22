import express, { Request, Response } from 'express';
import pool from '../db';

const router = express.Router();

// GET toutes les news
router.get('/', async (req: Request, res: Response) => {
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

export default router;
