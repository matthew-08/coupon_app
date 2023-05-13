import { Request, Response } from 'express'
import { appDatabase } from '..'
import { UserDBInsertInput } from '../types'
import { signJwt } from '../utils/jwt'

const handleCreateUser = async (
    req: Request<{}, {}, UserDBInsertInput>,
    res: Response
) => {
    try {
        const user = await appDatabase.users.createUser(req.body)
        const jwt = await signJwt(user)
        return res.status(200).json({
            ...user,
            accessToken: jwt,
        })
    } catch (e: any) {
        console.log(e)
        res.status(400).send(e.errors)
    }
}

export { handleCreateUser }
