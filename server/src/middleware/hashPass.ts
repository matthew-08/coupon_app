import { NextFunction, Request, Response } from 'express'
import { CreateUserInput } from '../schema/user.schema'
import bcrpyt from 'bcrypt'

const hashPass = (
    req: Request<{}, {}, CreateUserInput>,
    res: Response,
    next: NextFunction
) => {
    try {
    } catch (error) {}
}
