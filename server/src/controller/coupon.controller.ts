import { Request, Response, NextFunction } from 'express'
import { appDatabase } from '..'
import { verifyJwt } from '../utils/jwt'

const getAllCouponsHandler = async (
    req: Request,
    res: Response<{}, { accessToken: string }>
) => {
    const getJwt = await verifyJwt(res.locals.accessToken)
    if (!getJwt.valid || !getJwt.decoded) {
        return res.status(400).send('Invalid access token')
    }
    const { id: userId } = getJwt.decoded
    const allCoupons = await appDatabase.coupons.getAllCoupons(userId)
    return res.status(200).json(allCoupons)
}

const redeemCouponHandler = async (
    req: Request<{ id: string }>,
    res: Response<{}, { accessToken: string }>
) => {
    const { id: couponId } = req.params
    const getJwt = await verifyJwt(res.locals.accessToken)
    if (!getJwt.valid || !getJwt.decoded) {
        return res.status(400).send('Invalid access token')
    }
    const { id: userId } = getJwt.decoded
    const { code, redeemedat: redeemedAt } =
        await appDatabase.coupons.redeemCoupon(userId, couponId)
    return res.status(200).send({
        code,
        redeemedAt,
    })
}

export { getAllCouponsHandler, redeemCouponHandler }
