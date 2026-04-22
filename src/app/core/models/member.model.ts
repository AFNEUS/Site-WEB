export interface Member {
  id: string;
  nom: string;
  prenom: string;
  poste: string;       // ex: "Président", "Secrétaire Général"
  photo?: string;      // chemin vers la photo
  email?: string;
  linkedin?: string;
}

