export type NewsCategorie = 'evenement' | 'annonce' | 'communique' | 'autre';

export interface News {
  id: string;
  titre: string;
  contenu: string;
  resume: string;       // court résumé affiché sur la card
  date: string;         // format ISO : "2026-02-20"
  auteur: string;
  categorie: NewsCategorie;
  image?: string;       // image de couverture (optionnelle)
  associationId?: string; // si l'actu vient d'une asso en particulier
}

