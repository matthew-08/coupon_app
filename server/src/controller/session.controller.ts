import { Request, Response } from 'express'
import { UserSessionInput } from '../schema/session.schema'
import jwt from 'jsonwebtoken'
import appEnv from '../appConfig/env'
import { signJwt, verifyJwt } from '../utils/jwt'
import get from 'lodash'

const handleCreateSession = async (
    req: Request<{}, {}, UserSessionInput>,
    res: Response<{}, { userId: string }>
) => {
    const { userId } = res.locals
    const { email } = req.body
    const jwtPayload = {
        email,
        id: userId,
    }
    const signedJwt = await signJwt(jwtPayload, {
        expiresIn: appEnv.ACCESS_TOKEN_TTL,
    })

    return res.status(200).json({
        accessToken: signedJwt,
    })
}

export const handleGetSession = async (
    req: Request,
    res: Response<{}, { accessToken: string }>
) => {
    const result = await verifyJwt<>(res.locals.accessToken)
    console.log(res.locals.accessToken)
    if (result.valid) {
        return res.status(200).send(result)
    } else {
        return res.status(401).send(result)
    }
}

export default handleCreateSession
