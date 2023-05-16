# Coupon Application
![image](https://github.com/matthew-08/coupon_app/assets/114291570/2fb94163-3c9d-4e91-ab57-ed3ae9a688e1)

# Setup

## With Docker
Start the application from the root directory using Docker Compose.
```
docker compose up
```

After running the command, you should be able to access the client application at http://localhost:3000/ and the server application at http://localhost:4000/.  Test credentials are provided on the client application.  If you prefer to create an account you can do so by sending a post request to http://localhost:4000/api/users with the following request body format:

```ts
{
    "email": "email",
    "password": "password",
    "confirmPassword": "confirm password",
    "name": "name" 
}
```

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

Start the development server
```
npm run dev
```

### Frontend:
Install dependencies

```
npm install
```

Start the development server
```
npm run dev
```

