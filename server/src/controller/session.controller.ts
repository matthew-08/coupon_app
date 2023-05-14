import { Request, Response } from 'express'
import { UserSessionInput } from '../schema/session.schema'
import jwt from 'jsonwebtoken'
import appEnv from '../appConfig/env'
import { signJwt } from '../utils/jwt'

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

export const handleGetSession = (req: Request, res: Response) => {
    console.log(req.headers)
}

export default handleCreateSession
