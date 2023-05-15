import { NextFunction, Request, Response } from 'express'
import bcrpyt from 'bcrypt'
import appEnv from '../appConfig/env'
import { UserDBInsertInput } from '../types'

const hashPass = async (
    req: Request<{}, {}, UserDBInsertInput>,
    res: Response,
    next: NextFunction
) => {
    try {
        const { password } = req.body
        const passHash = await bcrpyt.hash(password, appEnv.SALT_ROUNDS)
        req.body = {
            ...req.body,
            hashPass: passHash,
        }
        next()
    } catch (e: any) {
        return res.status(400).send(e.errors)
    }
}

export default hashPass
