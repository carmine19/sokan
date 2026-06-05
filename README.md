# Sokan

Laravel 11 application running on Docker (PHP 8.2-FPM, MySQL 8, Redis, MailHog, phpMyAdmin).

## Requirements

- Docker Desktop (or Docker Engine + Compose plugin)
- Git

## Local setup

```bash
# 1. Clone the repository
git clone <repository-url> sokan
cd sokan

# 2. Copy and edit environment variables
cp .env.example .env

# 3. Start Docker services
docker compose up -d

# 4. Generate application key
docker compose exec app php artisan key:generate

# 5. Run database migrations
docker compose exec app php artisan migrate

# 6. (Optional) Seed the database
docker compose exec app php artisan db:seed
```

## Services

| Service    | URL / Port                  | Notes                      |
|------------|-----------------------------|----------------------------|
| App        | http://localhost:8000       | Laravel via nginx           |
| phpMyAdmin | http://localhost:8080       | DB: sokan / sokan:123456   |
| MailHog    | http://localhost:8025       | Catches all outbound mail  |
| MySQL      | localhost:3306              | DB: sokan, user: sokan     |
| Redis      | localhost:6379              |                            |

## Docker commands

```bash
# Start all services
docker compose up -d

# Stop all services
docker compose down

# View logs
docker compose logs -f app

# Open a shell in the app container
docker compose exec app bash

# Run Artisan commands
docker compose exec app php artisan <command>
```

## Running tests

Tests use SQLite in-memory; no running Docker services required.

```bash
docker compose exec app php artisan test
```

To run a specific suite or filter:

```bash
docker compose exec app php artisan test --testsuite=Unit
docker compose exec app php artisan test --filter=ExampleTest
```

## Code style

PHP code follows PSR-12. Run the formatter with:

```bash
docker compose exec app ./vendor/bin/pint
```

## Environment variables

See `.env.example` for all available configuration options. Key variables:

| Variable          | Default         | Description                |
|-------------------|-----------------|----------------------------|
| `DB_HOST`         | `mysql`         | MySQL service hostname     |
| `DB_DATABASE`     | `sokan`         | Database name              |
| `DB_USERNAME`     | `sokan`         | Database user              |
| `REDIS_HOST`      | `redis`         | Redis service hostname     |
| `MAIL_HOST`       | `mailhog`       | SMTP host (MailHog)        |
| `MAIL_PORT`       | `1025`          | SMTP port                  |
| `APP_PORT`        | `8000`          | Exposed HTTP port          |
| `PHPMYADMIN_PORT` | `8080`          | phpMyAdmin port            |
| `MAILHOG_UI_PORT` | `8025`          | MailHog web UI port        |
