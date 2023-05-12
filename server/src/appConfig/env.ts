import dotenv from 'dotenv'
dotenv.config()

const appEnv = {
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_PORT: 1,
    APP_PORT: 3000,
    SALT_ROUNDS: 10,
}
console.log(appEnv)
export default appEnv
