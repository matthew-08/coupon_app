import { Request, Response } from 'express'
import { appDatabase } from '..'
import database from '../db/database'
import { CreateUserInput } from '../schema/user.schema'

const handleCreateUser = async (
    req: Request<{}, {}, CreateUserInput>,
    res: Response
) => {
    try {
        const user = await appDatabase.users.createUser(req.body)
    } catch (error) {}
}

export { handleCreateUser }
