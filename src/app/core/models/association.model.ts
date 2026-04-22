export interface Association {
  id: string;
  nom: string;
  sigle: string;       // ex: "BDE", "BDS"
  logo: string;        // chemin vers l'image
  description: string;
  ville: string;
  ecole: string;
  couleur?: string;    // couleur principale de l'asso (optionnelle)
  siteWeb?: string;
  reseauxSociaux?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

