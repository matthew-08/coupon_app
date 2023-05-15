import pgClient from '../appConfig/dbConnect'
import { QueryResult } from 'pg'
import { CreateUserInput } from '../schema/user.schema'
import type { User, UserDBInsertInput } from '../types'
import { UserSessionInput } from '../schema/session.schema'

interface UserPassQuery {
    email: string
    id: string
    passhash: string
}

const sqlQueries = {
    user: {
        async getUserPass(
            input: UserSessionInput
        ): Promise<UserPassQuery | undefined> {
            const user: QueryResult<UserPassQuery> = await pgClient.query(
                `
                SELECT email, id, passhash FROM users
                WHERE email=$1
                `,
                [input.email]
            )
            console.log(user.rows[0])
            return user.rows[0]
        },
        async createUser({
            hashPass,
            email,
            name,
        }: UserDBInsertInput): Promise<User> {
            const user: QueryResult<User> = await pgClient.query(
                `
                INSERT INTO users(email,name,passhash,createdate)
                VALUES($1,$2,$3,$4)
                RETURNING id, email
                `,
                [email, name, hashPass, '3']
            )
            return user.rows[0]
        },
    },
    coupons: {
        async getAllCoupons(userId: string) {
            const coupons = pgClient.query(
                `
            SELECT coupon.*, user_coupon.redeemed FROM coupon
            LEFT JOIN user_coupon
            ON user_id=$1 and user_coupon.coupon_id = coupon.id
            `,
                [userId]
            )
        },
        async redeemCoupon(userId: string, couponId: string) {
            const currentDate = Date.now().toString()
            const redeemedCoupon = pgClient.query(
                `
                INSERT INTO user_coupon(user_id, coupon_id, redeemedat, redeemed)
                VALUES($1, $2, $3, $4)
                RETURNING *
                `,
                [userId, couponId, currentDate, true]
            )
            return redeemedCoupon
        },
    },
}

export default sqlQueries
