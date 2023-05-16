# Coupon Application

# Setup

## Without Docker

### Backend:

Install dependencies

```
npm install
```

Create .env file in the root directory and provide Postgres credentials

```
POSTGRES_HOST=localhost
POSTGRES_DATABASE=coupon_app
POSTGRES_PASSWORD=password
POSTGRES_USER=postgres
POSTGRES_PORT=5432
```

Create and seed the database

```
psql -h hostname -U username -f seed.sql
```

(optional) Provide additional environment variables. Defaults are listed below.

```
ACCESS_TOKEN_TTL=1h
PRIVATE_KEY=unsafe_dev_key
PORT=4000
SALT_ROUNDS=10
```

### Frontend:
