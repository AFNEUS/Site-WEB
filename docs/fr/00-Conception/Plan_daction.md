# 📋 Plan Global du Projet

## Table des Matières

- Phase 0: Préparation et Structuration
- Phase 1: Analyse et Glossaire
- Phase 2: Modélisation UML
- Phase 3: Architecture et Design Patterns
- Phase 4: Nommage et Qualité
- Phase 5: Implémentation (Angular)
- Phase 6: Tests et Validation
- Phase 7: Documentation et Déploiement

---

## ✅ TO-DO LIST DÉTAILLÉE

### PHASE 0: PRÉPARATION ET STRUCTURATION

#### 0.1 Setup du Dépôt Git

- [ ] Créer le repository Git pour le projet Afneus
- [ ] Structurer l'arborescence selon les recommandations :

```
afneus-website/
├── docs/
│   ├── 01-analyse/
│   │   ├── glossaire-metier.md
│   │   ├── glossaire-technique.md
│   │   └── concepts-identification.md
│   ├── 02-modelisation/
│   │   ├── use-cases/
│   │   ├── sequence-diagrams/
│   │   ├── class-diagrams/
│   │   └── activity-diagrams/
│   ├── 03-architecture/
│   │   ├── architecture-decision.md
│   │   ├── design-patterns.md
│   │   └── quality-attributes.md
│   ├── 04-nommage/
│   │   └── guide-nommage.md
│   └── 05-scenarios/
│       └── scenarios-detailles.md
├── src/ (Angular project)
├── tests/
│   ├── unit/
│   ├── integration/
│   └── validation/
├── scripts/
├── .env.example
└── README.md
```

- [ ] Créer le fichier `.gitignore` adapté (Angular + Node.js)
- [ ] Initialiser le projet Angular (`ng new afneus-website`)


#### 0.2 Outils et Configuration

- [ ] Installer PlantUML/Mermaid pour les diagrammes
- [ ] Configurer ESLint et Prettier pour Angular
- [ ] Configurer les outils de CI/CD (GitHub Actions recommandé)
- [ ] Mettre en place les conventions Git (branches, commits)

---

### PHASE 1: ANALYSE ET GLOSSAIRE

#### 1.1 Identification des Concepts

**Lister toutes les entités du cahier des charges :**

- Afneus (association)
- Bureau National
- Conseil d'Administration
- Assemblée Générale
- Administrateurs
- Associations adhérentes
- Membres du réseau
- Ressources/Documents
- Services (formations, expo, concours)
- Utilisateurs (différents types)

**Identifier les rôles :**

- Visiteur anonyme
- Étudiant en sciences
- Membre d'association adhérente
- Administrateur
- Membre du Bureau National
- Formateur Afneus
- Partenaire

**Identifier les actions principales :**

- Consulter la vitrine
- Accéder aux ressources
- Contacter le BN
- S'inscrire à une formation
- Participer au système de gamification
- Demander accès aux services
- Consulter l'exposition "Femmes en Science"
- S'inscrire au Concours Jeunes et Sciences

**Identifier les propriétés clés :**

- Accessibilité (3-4 clics max)
- Simplicité d'architecture
- Maintenabilité
- Mise à jour facilitée

#### 1.2 Glossaire Métier

**Rédiger `docs/01-analyse/glossaire-metier.md` avec :**

- Afneus : définition, rôle
- Bureau National (BN)
- Conseil d'Administration (CA)
- Assemblée Générale (AG)
- Association adhérente
- Pôle (définition dans le contexte Afneus)
- Gamification
- Ressource documentaire
- Service Afneus
- etc.

**Actions :**
- [ ] Classer alphabétiquement
- [ ] Ajouter des exemples concrets

#### 1.3 Glossaire Technique

**Rédiger `docs/01-analyse/glossaire-technique.md` avec :**

- Site vitrine
- SPA (Single Page Application)
- Angular Component
- Service Angular
- Routing
- Authentication/Authorization
- API REST
- CMS (si utilisé)
- SSO (Single Sign-On, si applicable)
- Gamification Engine
- etc.

**Actions :**
- [ ] Classer alphabétiquement

#### 1.4 Justification du Vocabulaire

- [ ] Créer `docs/01-analyse/justification-vocabulaire.md`
- [ ] Expliquer les choix de nommage par rapport aux conventions (§5.5)
- [ ] Lier au guide de nommage (à créer en Phase 4)

---

### PHASE 2: MODÉLISATION UML

#### 2.1 Diagramme de Cas d'Utilisation Global

**Identifier tous les acteurs :**

- Visiteur
- Membre
- Administrateur
- Membre BN
- Formateur
- Partenaire
- Système (pour actions automatiques)

**Lister tous les cas d'utilisation :**

**Partie Vitrine**
- Consulter présentation Afneus
- Consulter liste des associations adhérentes
- Consulter actualités
- Contacter le BN

**Partie Ressources**
- Accéder aux ressources
- Rechercher une ressource
- Filtrer les ressources

**Partie Services**
- Demander une formation
- S'inscrire au Concours JeS
- Consulter expo Femmes en Science

**Partie Gamification**
- Créer un compte utilisateur
- Se connecter
- Consulter son profil
- Gagner des points
- Consulter le classement

**Partie Administration**
- Gérer les utilisateurs
- Modérer les contenus
- Gérer les ressources
- Gérer les services

**Actions :**
- [ ] Créer le diagramme PlantUML dans `docs/02-modelisation/use-cases/diagramme-global.puml`
- [ ] Générer l'image du diagramme

#### 2.2 Scénarios Fondamentaux

**Lister et trier par ordre d'importance :**

- **[CRITIQUE]** Installation/Découverte de l'application
- **[CRITIQUE]** Créer un compte / Devenir membre
- **[CRITIQUE]** Consulter la vitrine Afneus
- **[IMPORTANT]** Accéder aux ressources documentaires
- **[IMPORTANT]** Demander une formation
- **[IMPORTANT]** Contacter le Bureau National
- **[MOYEN]** S'inscrire au Concours Jeunes et Sciences
- **[MOYEN]** Consulter l'exposition Femmes en Science
- **[MOYEN]** Participer au système de gamification
- **[ADMIN]** Modérer les contenus
- **[ADMIN]** Gérer les utilisateurs
- **[ADMIN]** Ajouter/Modifier des ressources

**Identifier 2 scénarios uniques (non proposés par d'autres) :**

- [ ] Exemple : "Recommandation personnalisée de formations basée sur le profil"
- [ ] Exemple : "Tableau de bord temps réel pour le BN"
- [ ] À définir selon vos besoins spécifiques

#### 2.3 Diagrammes de Séquence Système (minimum 4)

**Scénario 1 (unique) : Inscription et onboarding d'un nouveau membre**

- **Fichier :** `docs/02-modelisation/sequence-diagrams/seq-inscription-membre.puml`
- **Acteurs :** Visiteur, Système, Base de données, Service Email
- **Flux :** Formulaire → Validation → Création compte → Email confirmation → Activation

**Scénario 2 (unique) : Demande de formation avec workflow d'approbation**

- **Fichier :** `docs/02-modelisation/sequence-diagrams/seq-demande-formation.puml`
- **Acteurs :** Membre, Système, Formateur, BN
- **Flux :** Demande → Vérification éligibilité → Notification formateur → Validation → Confirmation

**Scénario 3 : Accès aux ressources avec authentification**

- **Fichier :** `docs/02-modelisation/sequence-diagrams/seq-acces-ressources.puml`
- **Acteurs :** Utilisateur, Système Auth, Service Ressources, Drive externe
- **Flux :** Login → Token → Requête ressource → Vérification droits → Lien externe

**Scénario 4 : Système de gamification - Gain de points**

- **Fichier :** `docs/02-modelisation/sequence-diagrams/seq-gamification.puml`
- **Acteurs :** Utilisateur, Système, Service Gamification, Base de données
- **Flux :** Action utilisateur → Détection événement → Calcul points → Mise à jour profil → Notification

**Actions :**
- [ ] Générer les images de tous les diagrammes

#### 2.4 Diagrammes de Classes (5 minimum)

**Diagramme 1 : Gestion des Utilisateurs et Rôles**
- **Fichier :** `docs/02-modelisation/class-diagrams/class-utilisateurs.puml`
- **Classes :** User, Role, Permission, Profile, Association

**Diagramme 2 : Gestion des Ressources**
- **Fichier :** `docs/02-modelisation/class-diagrams/class-ressources.puml`
- **Classes :** Resource, Category, Tag, ExternalLink, AccessRight

**Diagramme 3 : Système de Gamification**
- **Fichier :** `docs/02-modelisation/class-diagrams/class-gamification.puml`
- **Classes :** Badge, Achievement, Point, Leaderboard, UserProgress

**Diagramme 4 : Gestion des Services**
- **Fichier :** `docs/02-modelisation/class-diagrams/class-services.puml`
- **Classes :** Service, Formation, ConcoursJeS, Exposition, Request, Approval

**Diagramme 5 : Gestion du Contenu Vitrine**
- **Fichier :** `docs/02-modelisation/class-diagrams/class-contenu.puml`
- **Classes :** Article, News, Event, Page, Media, Author

#### 2.5 Diagramme de Classes Global

- [ ] Créer `docs/02-modelisation/class-diagrams/class-global.puml`
- [ ] Intégrer toutes les classes des 5 diagrammes précédents
- [ ] Détailler les associations avec cardinalités :
  - User 1..* ↔ 0..* Role
  - User 1 ↔ 0..1 Profile
  - User 1 ↔ 0..* Achievement
  - Resource 1 ↔ 1..* Category
  - Service 1 ↔ 0..* Request
  - etc.
- [ ] Ajouter les attributs principaux de chaque classe
- [ ] Ajouter les méthodes principales

#### 2.6 Diagrammes d'Activités (Workflows)

**Workflow 1 : Processus de validation d'une demande de formation**
- **Fichier :** `docs/02-modelisation/activity-diagrams/activity-validation-formation.puml`

**Workflow 2 : Processus de modération de contenu**
- **Fichier :** `docs/02-modelisation/activity-diagrams/activity-moderation.puml`

**Workflow 3 : Processus d'inscription au Concours JeS**
- **Fichier :** `docs/02-modelisation/activity-diagrams/activity-inscription-jes.puml`

**Workflow 4 : Processus de mise à jour des ressources**
- **Fichier :** `docs/02-modelisation/activity-diagrams/activity-maj-ressources.puml`

---

### PHASE 3: ARCHITECTURE ET DESIGN PATTERNS

#### 3.1 Choix d'Architecture

- [ ] Créer `docs/03-architecture/architecture-decision.md`

**Décrire l'architecture choisie :**

**Recommandation : Architecture en couches (Layered Architecture) pour Angular**
- Présentation (Components)
- Logique métier (Services)
- Accès aux données (Repositories/API Services)

**OU Architecture modulaire par fonctionnalités**
- Core module
- Shared module
- Feature modules (vitrine, ressources, services, gamification, admin)

**Créer les vues architecturales :**
- [ ] Vue logique : organisation des modules Angular
- [ ] Vue processus : flux de données, communication API
- [ ] Vue développement : structure des dossiers, dépendances
- [ ] Vue physique : déploiement (serveur OVH, CDN si nécessaire)

#### 3.2 Attributs de Qualité

- [ ] Documenter dans `docs/03-architecture/quality-attributes.md`

**Performance :**
- Lazy loading des modules Angular
- Optimisation du bundle size
- Caching des ressources statiques
- CDN pour les assets

**Sécurité :**
- Authentification JWT
- Protection CSRF
- Validation côté serveur et client
- HTTPS obligatoire
- Gestion des rôles et permissions

**Maintenabilité :**
- Code modulaire
- Documentation inline
- Tests unitaires (>80% coverage)
- Conventions de nommage strictes
- CI/CD automatisé

**Modularité :**
- Modules Angular indépendants
- Services réutilisables
- Components atomiques

**Évolutivité :**
- Architecture permettant l'ajout de nouveaux modules
- API versionnée
- Base de données scalable
- Scripts indépendants pour les services IA

#### 3.3 Design Patterns

- [ ] Créer `docs/03-architecture/design-patterns.md`
- [ ] Identifier et justifier les patterns utilisés :

**Patterns recommandés pour Angular :**

**1. Singleton Pattern :**
- Services Angular (par défaut avec `providedIn: 'root'`)
- **Exemple :** AuthService, GamificationService
- **Justification :** Une seule instance partagée dans toute l'application

**2. Observer Pattern :**
- RxJS Observables pour la gestion des données asynchrones
- **Exemple :** Services communiquant avec l'API
- **Justification :** Gestion réactive des flux de données

**3. Dependency Injection :**
- DI natif d'Angular
- **Exemple :** Injection des services dans les components
- **Justification :** Découplage, testabilité

**4. Factory Pattern :**
- Création dynamique de components
- **Exemple :** ComponentFactoryResolver pour modals/dialogs
- **Justification :** Création flexible d'objets complexes

**5. Strategy Pattern :**
- Différentes stratégies d'authentification (local, SSO, etc.)
- **Exemple :** AuthStrategy interface avec LocalAuthStrategy, SSOAuthStrategy
- **Justification :** Flexibilité pour changer l'algorithme à l'exécution

**6. Facade Pattern :**
- Services façade pour simplifier l'accès à des systèmes complexes
- **Exemple :** ResourceFacadeService encapsulant plusieurs services
- **Justification :** Interface simplifiée pour le client

**7. Repository Pattern :**
- Abstraction de l'accès aux données
- **Exemple :** UserRepository, ResourceRepository
- **Justification :** Séparation de la logique métier et de l'accès aux données

**8. Decorator Pattern :**
- Decorators TypeScript pour métadonnées
- **Exemple :** @Component, @Injectable, custom decorators (@RequireAuth)
- **Justification :** Ajout de fonctionnalités sans modifier le code existant

#### 3.4 Intégration de la Documentation

- [ ] Créer `docs/03-architecture/documentation-workflow.md`

**Définir comment la documentation sera intégrée :**
- Markdown pour tous les documents
- PlantUML/Mermaid intégrés dans le markdown
- Git pour le versionnement
- GitHub/GitLab Wiki ou Pages pour la publication
- Diagrammes UML versionnés avec le code
- Documentation API avec Swagger/OpenAPI (si API backend)
- Storybook pour documenter les components Angular (optionnel)

---

### PHASE 4: NOMMAGE ET QUALITÉ

#### 4.1 Guide de Nommage

- [ ] Créer `docs/04-nommage/guide-nommage.md`

**Conventions TypeScript/Angular :**

**Fichiers :**
- Components : `nom-component.component.ts`
- Services : `nom.service.ts`
- Models : `nom.model.ts`
- Interfaces : `nom.interface.ts`

**Classes :**
- PascalCase : `UserService`, `ResourceComponent`
- Suffixes : `*Component`, `*Service`, `*Module`, `*Guard`, `*Interceptor`

**Variables et fonctions :**
- camelCase : `userName`, `getUserById()`
- Constantes : `UPPER_SNAKE_CASE`
- Booléens : préfixes `is`, `has`, `should` (`isAuthenticated`, `hasPermission`)

**Modules Angular :**
- PascalCase avec suffixe : `CoreModule`, `SharedModule`, `VitrineModule`

**Routes :**
- kebab-case : `/bureau-national`, `/demande-formation`

**CSS/SCSS :**
- BEM ou kebab-case : `.btn-primary`, `.card__header`

**Conventions Base de données :**
- Tables : `snake_case` pluriel (`users`, `resources`)
- Colonnes : `snake_case` (`created_at`, `user_id`)
- Relations : explicites (`user_id`, `role_id`)

#### 4.2 Vérification de Cohérence

- [ ] Créer une matrice de traçabilité dans `docs/04-nommage/matrice-coherence.md`

| Concept Métier | Glossaire Métier | Classe UML | Component/Service Angular | Table BDD |
|---|---|---|---|---|
| Bureau National | Bureau National | BureauNational | BureauNationalComponent | bureau_national_members |
| Ressource | Ressource documentaire | Resource | ResourceComponent, ResourceService | resources |
| Formation | Formation Afneus | Formation | FormationComponent, FormationService | formations |
| ... | ... | ... | ... | ... |

- [ ] Vérifier la cohérence entre tous les niveaux
- [ ] Corriger les incohérences détectées

#### 4.3 Outils Automatiques

**Configurer ESLint pour Angular :**
- [ ] Fichier `.eslintrc.json`
- [ ] Règles de nommage
- [ ] Règles de complexité

**Configurer Prettier :**
- [ ] Fichier `.prettierrc`
- [ ] Format uniforme du code

**Configurer Husky :**
- [ ] Pre-commit hooks pour linter
- [ ] Pre-push hooks pour tests

**Configurer CI/CD (GitHub Actions) :**

```yaml
name: CI
on: [push, pull_request]
jobs:
  lint:
    - run: npm run lint
  test:
    - run: npm run test:ci
  build:
    - run: npm run build --prod
  docs:
    - run: npm run docs:generate
```

- [ ] Configurer SonarQube ou CodeClimate (optionnel)
- [ ] Configurer Compodoc pour générer la documentation Angular

---

### PHASE 5: IMPLÉMENTATION (ANGULAR)

#### 5.1 Structure du Projet Angular

Organiser la structure :

```
src/
├── app/
│   ├── core/              # Services singleton, guards, interceptors
│   │   ├── auth/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   └── services/
│   ├── shared/            # Components, directives, pipes partagés
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── models/
│   ├── features/          # Modules fonctionnels
│   │   ├── vitrine/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   └── vitrine.module.ts
│   │   ├── ressources/
│   │   ├── services/      # Services Afneus (formations, concours, expo)
│   │   ├── gamification/
│   │   └── admin/
│   ├── layouts/           # Layouts principaux
│   ├── app-routing.module.ts
│   └── app.module.ts
├── assets/
├── environments/
└── styles/
```

#### 5.2 Modules Principaux à Créer

**Core Module**
- [ ] CoreModule (importé une seule fois dans AppModule)
- [ ] AuthService (authentification JWT)
- [ ] AuthGuard (protection des routes)
- [ ] RoleGuard (vérification des rôles)
- [ ] HttpInterceptor (ajout du token, gestion erreurs)

**Shared Module**
- [ ] SharedModule (exporté et importé partout)
- [ ] Components réutilisables :
  - HeaderComponent
  - FooterComponent
  - ButtonComponent
  - CardComponent
  - LoaderComponent
  - ModalComponent
- [ ] Directives personnalisées (ex: HasPermissionDirective)
- [ ] Pipes personnalisés (ex: SafeHtmlPipe, TruncatePipe)

**Feature Modules**

**VitrineModule :**
- [ ] HomeComponent (page d'accueil)
- [ ] AboutComponent (présentation Afneus)
- [ ] AssociationsComponent (liste des adhérents)
- [ ] NewsComponent (actualités)
- [ ] ContactComponent (formulaire de contact BN)

**RessourcesModule :**
- [ ] ResourceListComponent
- [ ] ResourceDetailComponent
- [ ] ResourceSearchComponent
- [ ] ResourceService

**ServicesModule :**
- [ ] FormationRequestComponent (demande de formation)
- [ ] ConcoursJeSComponent (inscription concours)
- [ ] ExpositionComponent (expo Femmes en Science)
- [ ] ServiceService

**GamificationModule :**
- [ ] ProfileComponent (profil utilisateur avec badges)
- [ ] LeaderboardComponent
- [ ] BadgeListComponent
- [ ] GamificationService

**AdminModule (lazy loaded, protégé par RoleGuard) :**
- [ ] UserManagementComponent
- [ ] ResourceManagementComponent
- [ ] ContentModerationComponent
- [ ] DashboardComponent
- [ ] AdminService

#### 5.3 Services et Scripts Indépendants

Créer le dossier `scripts/` pour scripts autonomes :

- [ ] `scripts/ai-content-generator/` (génération de contenu avec IA)
- [ ] `scripts/data-import/` (import de données depuis le drive)
- [ ] `scripts/email-notifications/` (envoi d'emails)
- [ ] `scripts/gamification-engine/` (calcul de points, badges)

Chaque script doit :

- Être exécutable indépendamment
- Utiliser .env pour la configuration (clés API IA, etc.)
- Avoir sa propre documentation README.md
- Pouvoir être intégré dans l'application Angular via API

Créer .env.example :

```bash
# API Keys
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=afneus_db

# Email Service
SMTP_HOST=smtp.example.com
SMTP_PORT=587

# External Services
DRIVE_API_KEY=your_key_here
```

#### 5.4 Routing et Navigation

Configurer le routing principal dans app-routing.module.ts :

```typescript
const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeComponent },
  {
    path: 'ressources',
    loadChildren: () => import('./features/ressources/ressources.module').then(m => m.RessourcesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin', 'BN'] }
  },
  // ...
];
```

Respecter la contrainte "3-4 clics maximum" :

- Navigation claire et peu profonde
- Breadcrumbs pour l'orientation
- Menu principal accessible partout

#### 5.5 Charte Graphique

- [ ] Définir les couleurs principales (violet selon le cahier des charges)
- [ ] Créer `styles/_variables.scss` :

```scss
// Couleurs principales
$primary-purple: #6b46c1;
$secondary-purple: #9061f9;
$light-purple: #e9d8fd;

// Couleurs complémentaires
$text-dark: #2d3748;
$text-light: #a0aec0;
$background: #f7fafc;

// Spacing
$spacing-unit: 8px;
```

- [ ] Créer le design system dans `shared/components/`
- [ ] Utiliser un framework CSS (Tailwind, Angular Material, ou custom)

#### 5.6 Authentification et Autorisation

**Implémenter AuthService :**
- [ ] `login()`
- [ ] `logout()`
- [ ] `register()`
- [ ] `refreshToken()`
- [ ] `getCurrentUser()`
- [ ] `hasRole()`
- [ ] `hasPermission()`

**Actions :**
- [ ] Implémenter AuthGuard
- [ ] Implémenter RoleGuard
- [ ] Implémenter JwtInterceptor
- [ ] Gérer le stockage sécurisé du token (localStorage avec précautions ou httpOnly cookie)

#### 5.7 Communication avec le Backend

**Créer les services API dans `core/services/api/` :**
- [ ] `api.service.ts` (service de base)
- [ ] `user-api.service.ts`
- [ ] `resource-api.service.ts`
- [ ] `formation-api.service.ts`
- [ ] etc.

**Actions :**
- [ ] Utiliser RxJS Observables
- [ ] Gérer les erreurs globalement avec un interceptor
- [ ] Implémenter le loading state global

---

### PHASE 6: TESTS ET VALIDATION

#### 6.1 Tests Unitaires

- [ ] Configurer Jasmine/Karma (par défaut avec Angular)
- [ ] Objectif : >80% de couverture de code
- [ ] Créer tests pour chaque service dans `*.service.spec.ts`
- [ ] Créer tests pour chaque component dans `*.component.spec.ts`
- [ ] Tester les guards
- [ ] Tester les interceptors
- [ ] Tester les pipes et directives

Exemples de tests à créer :

**auth.service.spec.ts** :
- login avec credentials valides
- login avec credentials invalides
- logout
- token refresh

**resource.service.spec.ts** :
- `getResources()`
- `getResourceById()`
- `searchResources()`

**auth.guard.spec.ts** :
- canActivate avec utilisateur authentifié
- canActivate avec utilisateur non authentifié

#### 6.2 Tests d'Intégration

- [ ] Créer dossier `tests/integration/`

Tester les flux complets :
- Inscription → Confirmation → Login → Accès ressources
- Demande formation → Notification → Validation → Confirmation
- Modération contenu → Approbation → Publication

Utiliser Cypress ou Protractor pour les tests E2E :

```typescript
// Exemple Cypress
describe('User Registration Flow', () => {
  it('should register a new user successfully', () => {
    cy.visit('/inscription');
    cy.get('[data-testid="email"]').type('test@example.com');
    cy.get('[data-testid="password"]').type('SecurePass123');
    cy.get('[data-testid="submit"]').click();
    cy.url().should('include', '/confirmation');
  });
});
```

#### 6.3 Tests de Validation

- [ ] Créer dossier `tests/validation/`

**Tests de validation métier** :
- Vérifier que les ressources sont accessibles en 3-4 clics
- Vérifier que seuls les utilisateurs autorisés accèdent à l'admin
- Vérifier le système de points de gamification
- Vérifier les workflows de validation (formations, modération)

**Tests d'accessibilité (WCAG 2.1)** :
- Utiliser `@angular-eslint/accessibility`
- Tester la navigation au clavier
- Tester avec un lecteur d'écran

**Tests de performance** :
- Lighthouse CI
- Bundle size < 500KB (initial)
- First Contentful Paint < 1.5s

**Tests de sécurité** :
- Vérifier la protection CSRF
- Vérifier l'échappement XSS
- Vérifier la validation des inputs
- Scanner les dépendances (`npm audit`)

#### 6.4 Scripts de Tests

Configurer les scripts dans package.json :

```json
{
  "scripts": {
    "test": "ng test",
    "test:ci": "ng test --watch=false --code-coverage",
    "test:e2e": "cypress run",
    "test:integration": "npm run test:e2e",
    "test:all": "npm run test:ci && npm run test:integration"
  }
}
```

---

### PHASE 7: DOCUMENTATION ET DÉPLOIEMENT

#### 7.1 Documentation Finale

**Mettre à jour le `README.md` principal avec :**
- [ ] Description du projet
- [ ] Technologies utilisées
- [ ] Installation et setup
- [ ] Scripts disponibles
- [ ] Structure du projet
- [ ] Contribution guidelines

**Actions :**
- [ ] Créer `docs/README.md` comme index de toute la documentation
- [ ] Générer la documentation Angular avec Compodoc :

```bash
npm install --save-dev @compodoc/compodoc
npm run docs:generate
```

- [ ] Créer `CONTRIBUTING.md` (guide pour les futurs contributeurs)
- [ ] Créer `CHANGELOG.md` (historique des versions)

#### 7.2 Déploiement

**Backend (si applicable)** :
- Déployer sur OVH VPS
- Configurer NGINX/Apache
- Configurer SSL (Let's Encrypt)
- Configurer la base de données

**Frontend Angular** :
- Build production : `ng build --configuration production`
- Optimisations :
  - AOT compilation
  - Tree shaking
  - Minification
  - Lazy loading
- Déployer sur OVH (hosting web ou VPS)
- Configurer le CDN pour les assets statiques

**CI/CD** :
- Pipeline de déploiement automatique
- Tests automatiques avant déploiement
- Rollback automatique en cas d'échec

#### 7.3 Estimation des Coûts OVH

**Rechercher et documenter dans le cahier des charges :**
- Hébergement web mutualisé : ~3-10€/mois
- VPS : ~6-20€/mois selon les ressources
- Nom de domaine : ~10€/an
- SSL : gratuit (Let's Encrypt)
- Base de données : inclus ou ~5€/mois
- Backup : ~5€/mois
- **Total estimé : 10-30€/mois**

#### 7.4 Formation et Passation

- [ ] Créer un guide d'utilisation pour les administrateurs
- [ ] Créer un guide de maintenance pour le futur BN
- [ ] Documenter les procédures de mise à jour :
  - Comment ajouter un article/actualité
  - Comment gérer les utilisateurs
  - Comment ajouter une ressource
  - Comment modifier la charte graphique
- [ ] Organiser une session de formation pour le BN actuel
- [ ] Prévoir une documentation vidéo (tutoriels)
- Documenter les procédures de mise à jour :
  - Comment ajouter un article/actualité
  - Comment gérer les utilisateurs
  - Comment ajouter une ressource
  - Comment modifier la charte graphique
- Organiser une session de formation pour le BN actuel
- Prévoir une documentation vidéo (tutoriels)
