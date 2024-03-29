import pgClient from '../appConfig/dbConnect'
import { QueryResult } from 'pg'
import type { QueryAllCoupons, User, UserDBInsertInput } from '../types'
import { UserSessionInput } from '../schema/session.schema'
import { genCouponCode } from '../utils/genCouponCode'

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
            const coupons: QueryResult<QueryAllCoupons> = await pgClient.query(
                `
            SELECT coupon.*, user_coupon.redeemed, user_coupon.code, user_coupon.redeemedat 
            FROM coupon
            LEFT JOIN user_coupon
            ON user_id=$1 and user_coupon.coupon_id = coupon.id
            `,
                [userId]
            )
            return coupons.rows
        },
        async redeemCoupon(userId: string, couponId: string) {
            const currentDate = Date.now().toString()
            const code = genCouponCode()
            const redeemedCoupon: QueryResult<{
                code: string
                redeemedat: string
            }> = await pgClient.query(
                `
                INSERT INTO user_coupon(user_id, coupon_id, redeemedat, redeemed, code)
                VALUES($1, $2, $3, $4, $5)
                RETURNING *
                `,
                [userId, couponId, currentDate, true, code]
            )
            return redeemedCoupon.rows[0]
        },
    },
}

export default sqlQueries
