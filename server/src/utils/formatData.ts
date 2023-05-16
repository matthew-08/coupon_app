import { CouponInfo, QueryAllCoupons } from '../types'

const formatCoupons = (dbResponse: QueryAllCoupons[]): CouponInfo[] => {
    return dbResponse.map((coupon) => {
        return {
            company: coupon.company,
            deal: coupon.deal,
            validThroughStart: coupon.validthroughstart,
            validThroughEnd: coupon.validthroughend,
            icon: coupon.icon,
            id: coupon.id,
            redeemed: coupon.redeemed ? true : false,
            code: coupon.code || null,
            redeemedAt: coupon.redeemedat,
        }
    })
}

export { formatCoupons }
