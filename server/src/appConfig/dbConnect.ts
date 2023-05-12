import { Pool } from 'pg'
import appEnv from './env'

const pgClient = new Pool({
    host: appEnv.POSTGRES_HOST,
    port: appEnv.POSTGRES_PORT,
    password: appEnv.POSTGRES_PASSWORD,
    database: appEnv.POSTGRES_DATABSE,
})

export default pgClient
