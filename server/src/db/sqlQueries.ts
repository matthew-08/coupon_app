import pgClient from '../appConfig/dbConnect'
import { QueryResult } from 'pg'

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
    },
}

export default sqlQueries
