# Boilerplate SaaS B2B

Template prêt à l'emploi pour lancer un SaaS B2B. Design minimaliste inspiré de Stripe et Linear.

## Ce qui est inclus

- **Landing page complète** : Hero, Problème, Solution, Fonctionnalités, Témoignages, Pricing, FAQ, CTA, Footer
- **Authentification** : Inscription, Connexion, Mot de passe oublié, Google OAuth
- **Dashboard** : Vue d'ensemble, Équipe, Paramètres (Profil, Organisation, Facturation, Sécurité)
- **Gestion d'équipe** : Liste des membres, invitation, rôles (Owner, Admin, Member, Viewer)

## Stack technique

- React + TypeScript + Vite
- Tailwind CSS
- React Router
- Supabase (auth + base de données)
- Lucide React (icônes)

## Démarrage rapide

### 1. Importer dans Bolt
Connectez ce repo GitHub à Bolt — le projet s'importe automatiquement.

### 2. Configurer Supabase
1. Créez un projet sur [supabase.com](https://supabase.com)
2. Copiez `.env.example` en `.env`
3. Collez votre `SUPABASE_URL` et `SUPABASE_ANON_KEY`

### 3. Configurer Google OAuth (optionnel)
1. Allez dans la [Google Cloud Console](https://console.cloud.google.com)
2. Créez des identifiants OAuth 2.0
3. Dans Supabase > Authentication > Providers > Google, activez et collez vos clés

### 4. Personnaliser

| Élément | Où le trouver |
|---------|---------------|
| Nom du SaaS ("VotreSaaS") | Navbar, Footer, pages auth |
| Proposition de valeur | Hero section |
| Pain points | Section Problème |
| Fonctionnalités | Section Features (6 cards) |
| Témoignages | Section Testimonials |
| Prix | Section Pricing + Settings > Facturation |
| FAQ | Section FAQ |
| Couleur d'accent | Cherchez `indigo-600` dans le code |

## Structure du projet

```
src/
├── components/
│   ├── landing/        # Sections de la landing page
│   ├── auth/           # Connexion, inscription, mot de passe oublié
│   └── dashboard/      # Dashboard, sidebar, équipe, paramètres
├── hooks/
│   └── useAuth.tsx     # Contexte d'authentification Supabase
├── lib/
│   └── supabase.ts     # Client Supabase
├── App.tsx             # Routes
└── main.tsx            # Point d'entrée
```
