# Scalar

> Learn programming. At your level. At your pace.

Scalar is an adaptive learning platform for developers. It assesses your real level, generates a personalized AI-powered learning path, and validates your code in isolated Docker sandboxes — all in one place.

---

## Overview

The core loop that makes Scalar valuable:

```
Adaptive level test → AI-generated learning path → Courses → Code exercises (Docker sandbox)
```

**Personas:** Visitor · Free learner · Premium learner · Admin  
**Business model:** Freemium — first 2 modules free, full access with Premium (Stripe)

---

## Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | Vue 3 · Vite · TypeScript         |
| Backend    | PHP 8.4 · Symfony 7               |
| Database   | PostgreSQL 16                     |
| AI         | Claude / OpenAI API               |
| Payments   | Stripe                            |
| Runtime    | Docker · Docker Compose           |

---

## Architecture

```
scalar/
├── scalar-frontend/          # Vue 3 SPA (Vite + TypeScript)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── views/            # Page-level components
│   │   ├── router/           # Vue Router
│   │   └── stores/           # State management
├── backend/                  # Symfony application
│   ├── config/               # Bundles, routes, services, packages
│   ├── public/               # Web entrypoint (index.php)
│   └── src/
│       ├── Controller/       # HTTP controllers
│       ├── Entity/           # Doctrine entities
│       ├── Repository/       # Data access layer
│       └── Service/          # Business logic
├── infra/
│   └── docker/
│       └── backend.Dockerfile
├── docker-compose.yml
└── entrypoint.sh
```

---

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) >= 4.x
- Node.js >= 20.19 (frontend local dev only)

---

## Quick start

```bash
git clone <repo-url>
cd scalar
docker compose build
docker compose up -d
```

| Service  | URL                   |
|----------|-----------------------|
| Backend  | http://localhost:8000 |
| Database | localhost:5432        |

---

## Frontend (local dev)

```bash
cd scalar-frontend
npm install
npm run dev
```

Frontend dev server runs at http://localhost:5173

```bash
npm run build        # Production build
npm run test:unit    # Unit tests (Vitest)
npm run lint         # Lint + format
```

---

## Backend commands

```bash
# Shell into the container
docker compose exec backend bash

# Symfony console
docker compose exec backend php bin/console <command>

# Useful shortcuts
docker compose exec backend php bin/console debug:router
docker compose exec backend php bin/console cache:clear
docker compose logs -f backend
```

---

## Environment variables

Declared in `backend/.env`. Override locally with `backend/.env.local` (not committed).

| Variable       | Default               | Description                          |
|----------------|-----------------------|--------------------------------------|
| `APP_ENV`      | `dev`                 | Symfony environment (`dev` / `prod`) |
| `APP_SECRET`   | —                     | Secret key — set in `.env.local`     |
| `DATABASE_URL` | set by Docker Compose | PostgreSQL connection string         |

Generate a secure `APP_SECRET`:

```bash
openssl rand -hex 32
```

---

## Stopping

```bash
docker compose down        # Stop containers
docker compose down -v     # Stop + delete database volume
```

---

## MVP Roadmap

| Sprint | US       | Focus                                                      | Status  |
|--------|----------|------------------------------------------------------------|---------|
| 1      | 01 02 10 | Fondation minimale (auth) + vitrine visiteur               | Planned |
| 2      | 05 06 07 08 | Cœur MVP — test de niveau + génération parcours IA      | Planned |
| 3      | 09 11 12 | Cœur MVP — cours + exercices sandbox Docker                | Planned |
| 4      | 14 15 16 17 | Freemium + abonnement Stripe                            | Planned |
| 5      | 03 04 13 18 19 | Confort + feedback IA + progression + certification  | Planned |
| 6      | 20 21 22 | Back-office admin                                          | Planned |

See [`userStory.md`](./userStory.md) for the full backlog (22 user stories, MoSCoW).

---

## Contributing

1. Branch from `main` following `feat/<scope>`, `fix/<scope>`, `chore/<scope>`
2. Conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
3. Open a PR against `main` with a clear summary and test plan
