# Scalar

Learn your first programming language, assess your level, and get sharp — for free.

## Stack

| Layer | Technology |
|---|---|
| Backend | PHP 8.4 · Symfony 8.0 |
| Database | PostgreSQL 16 |
| Runtime | Docker · Docker Compose |

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) >= 4.x

## Installation

```bash
git clone <repo-url>
cd scalar
docker compose build
```

## Running

```bash
docker compose up -d
```

The backend is available at http://localhost:8000

## Stopping

```bash
docker compose down
```

To also delete the database volume:

```bash
docker compose down -v
```

## Project structure

```
scalar/
├── backend/              # Symfony application
│   ├── config/           # Bundles, routes, services, packages
│   ├── public/           # Web entrypoint (index.php)
│   └── src/              # Application source code
│       └── Controller/   # HTTP controllers
├── infra/
│   └── docker/
│       └── backend.Dockerfile
├── docker-compose.yml
└── entrypoint.sh         # Container startup script
```

## Environment variables

Variables are declared in `backend/.env`. 

Override them locally with `backend/.env.local` (not committed).

| Variable | Default | Description |
|---|---|---|
| `APP_ENV` | `dev` | Symfony environment (`dev` / `prod`) |
| `APP_SECRET` | — | Secret key — **must be set in `.env.local`** |
| `DATABASE_URL` | set by Docker Compose | PostgreSQL connection string |

Generate a secure `APP_SECRET`:

```bash
docker compose exec backend php bin/console secrets:generate-keys
# or simply:
openssl rand -hex 32
```

## Useful commands

```bash
# Open a shell in the backend container
docker compose exec backend bash

# Run Symfony console commands
docker compose exec backend php bin/console <command>

# List available routes
docker compose exec backend php bin/console debug:router

# Clear cache
docker compose exec backend php bin/console cache:clear

# Check container logs
docker compose logs -f backend
```
