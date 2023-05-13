import bcrypt from 'bcrypt'
import { Request, Response, NextFunction } from 'express'
import database from '../db/database'
import { UserSessionInput } from '../schema/session.schema'

const passCompare = async (
    req: Request<{}, {}, UserSessionInput>,
    res: Response,
    next: NextFunction
) => {
    const { password: pTextPass } = req.body
    const getPass = await database.users.getUser(req.body)
    if (!getPass) {
        return res.status(400).send('Invalid email')
    }
    const comparePass = await bcrypt.compare(pTextPass, getPass.passhash)
    if (!comparePass) {
        return res.status(400).send('Invalid password')
    }
    res.locals.userId = getPass.id
    next()
}

export default passCompare
