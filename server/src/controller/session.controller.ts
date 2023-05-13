import { Request, Response } from 'express'
import { UserSessionInput } from '../schema/session.schema'

const handleCreateSession = async (
    req: Request<{}, {}, UserSessionInput>,
    res: Response
) => {}
