import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRole } from '../models/user.model';

// ── Faux comptes pour tester (à remplacer par Supabase plus tard) ──
const MOCK_USERS: (User & { password: string })[] = [
  {
    id: '1',
    email: 'bureau@afneus.fr',
    password: 'bureau123',
    nom: 'Dupont',
    prenom: 'Alice',
    role: 'bureau',
  },
  {
    id: '2',
    email: 'admin@bde-exemple.fr',
    password: 'admin123',
    nom: 'Martin',
    prenom: 'Bob',
    role: 'asso-admin',
    associationId: 'asso-1',
  },
];

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // ── État de l'utilisateur connecté (signal Angular) ──
  private _currentUser = signal<User | null>(this.loadFromStorage());

  // Accesseurs publics
  currentUser = this._currentUser.asReadonly();
  isLoggedIn  = computed(() => this._currentUser() !== null);
  role        = computed(() => this._currentUser()?.role ?? null);
  isBureau    = computed(() => this._currentUser()?.role === 'bureau');
  isAssoAdmin = computed(() => this._currentUser()?.role === 'asso-admin');

  constructor(private router: Router) {}

  // ── Connexion ──
  login(email: string, password: string): { success: boolean; message: string } {
    const found = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      return { success: false, message: 'Email ou mot de passe incorrect.' };
    }

    const { password: _, ...user } = found;
    this._currentUser.set(user);
    this.saveToStorage(user);

    // Redirection selon le rôle
    if (user.role === 'bureau') {
      this.router.navigate(['/bureau']);
    } else {
      this.router.navigate(['/mon-espace']);
    }

    return { success: true, message: 'Connexion réussie !' };
  }

  // ── Inscription (mock — à brancher sur Supabase plus tard) ──
  signup(
    email: string,
    password: string,
    nom: string,
    prenom: string,
    role: UserRole
  ): { success: boolean; message: string } {
    const exists = MOCK_USERS.find((u) => u.email === email);
    if (exists) {
      return { success: false, message: 'Cet email est déjà utilisé.' };
    }

    const newUser: User = {
      id: Date.now().toString(),
      email,
      nom,
      prenom,
      role,
    };

    MOCK_USERS.push({ ...newUser, password });
    this._currentUser.set(newUser);
    this.saveToStorage(newUser);

    if (newUser.role === 'bureau') {
      this.router.navigate(['/bureau']);
    } else {
      this.router.navigate(['/mon-espace']);
    }

    return { success: true, message: 'Compte créé avec succès !' };
  }

  // ── Déconnexion ──
  logout(): void {
    this._currentUser.set(null);
    localStorage.removeItem('afneus_user');
    this.router.navigate(['/']);
  }

  // ── Persistance localStorage ──
  private saveToStorage(user: User): void {
    localStorage.setItem('afneus_user', JSON.stringify(user));
  }

  private loadFromStorage(): User | null {
    try {
      const raw = localStorage.getItem('afneus_user');
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }
}

