import { UserSessionInput } from '../schema/session.schema'
import { CouponInfo, UserDBInsertInput } from '../types'
import { formatCoupons } from '../utils/formatData'
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
        async getAllCoupons(userId: string): Promise<CouponInfo[]> {
            const couponData = await sqlQueries.coupons.getAllCoupons(userId)
            return formatCoupons(couponData)
        },
        async redeemCoupon(userId: string, couponId: string) {
            return sqlQueries.coupons.redeemCoupon(userId, couponId)
        },
    },
}

export default database
