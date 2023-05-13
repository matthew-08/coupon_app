import { Pool } from 'pg'
import appEnv from './env'

const pgClient = new Pool({
    host: appEnv.POSTGRES_HOST,
    port: Number(appEnv.POSTGRES_PORT),
    password: appEnv.POSTGRES_PASSWORD,
    database: appEnv.POSTGRES_DATABASE,
    user: appEnv.POSTGRES_USER,
})

export default pgClient
