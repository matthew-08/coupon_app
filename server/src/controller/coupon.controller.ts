import { Request, Response, NextFunction } from 'express'
import database from '../db/database'
import { verifyJwt } from '../utils/jwt'

const getAllCouponsHandler = async (
    req: Request,
    res: Response<{}, { accessToken: string }>
) => {
    const getJwt = await verifyJwt(res.locals.accessToken)
    if (!getJwt.valid) {
        return res.status(400).send('Invalid access token')
    }
    console.log(getJwt.decoded)
    await database.coupons.getAllCoupons()
}

const redeemCouponHandler = (req: Request, res: Response) => {
    console.log(req.params)
}

export { getAllCouponsHandler, redeemCouponHandler }
