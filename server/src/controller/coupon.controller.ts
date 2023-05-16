import { Request, Response, NextFunction } from 'express'
import database from '../db/database'
import { genCouponCode } from '../utils/genCouponCode'
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
    const allCoupons = await database.coupons.getAllCoupons(userId)
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
        await database.coupons.redeemCoupon(userId, couponId)
    return res.status(200).send({
        code,
        redeemedAt,
    })
}

export { getAllCouponsHandler, redeemCouponHandler }
