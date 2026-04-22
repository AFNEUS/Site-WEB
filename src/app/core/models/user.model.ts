export type UserRole = 'super-admin' | 'bureau' | 'asso-admin';

export interface User {
  id: string;
  email: string;
  nom: string;
  prenom: string;
  role: UserRole;
  associationId?: string; // uniquement pour les asso-admin
  avatar?: string;
}

