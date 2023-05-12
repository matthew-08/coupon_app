import pgClient from '../appConfig/dbConnect'
import { QueryResult } from 'pg'
import { CreateUserInput } from '../schema/user.schema'
import type { User } from '../types'

const sqlQueries = {
    user: {
        async getUser(userId: string): Promise<User> {
            const user: QueryResult<User> = await pgClient.query(
                `
                SELECT email, id FROM users
                WHERE id=$0
                `,
                [userId]
            )
            return user.rows[0]
        },
        async createUser({
            confirmPassword,
            email,
            password,
            name,
        }: CreateUserInput): Promise<User> {
            const user: QueryResult<User> = await pgClient.query(
                `
                INSERT INTO users(email,name,passhash,createdate)
                VALUES($1,$2,$3,$4)
                RETURNING id, email
                `,
                [email, name, password, confirmPassword]
            )
            return user.rows[0]
        },
    },
}

export default sqlQueries
