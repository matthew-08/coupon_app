import dotenv from 'dotenv'
dotenv.config()

const appEnv = {
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_USER: process.env.POSTGRES_USER,
    APP_PORT: process.env.APP_PORT || 3000,
    SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
    ACCESS_TOKEN_TTL: process.env.ACCESS_TOKEN_TTL || '1h',
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    PRIVATE_KEY: process.env.PRIVATE_KEY || 'unsafe_dev_key',
}

export default appEnv
