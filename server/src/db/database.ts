import { UserSessionInput } from '../schema/session.schema'
import { CreateUserInput } from '../schema/user.schema'
import { CouponInfo, UserDBInsertInput } from '../types'
import sqlQueries from './sqlQueries'

const database = {
    users: {
        async createUser(user: UserDBInsertInput) {
            return await sqlQueries.user.createUser(user)
        },
        async getUser(user: UserSessionInput) {
            return await sqlQueries.user.getUserPass(user)
        },
    },
    coupons: {
        async getAllCoupons(): Promise<CouponInfo[]> {
            return sqlQueries.coupons.getAllCoupons()
        },
        async redeemCoupon(userId: string, couponId: string) {
            return sqlQueries.coupons.redeemCoupon(userId, couponId)
        },
    },
}

export default database
