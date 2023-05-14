import { NextFunction, Request, Response } from 'express'

const passAuthHeader = (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers.authorization?.replace(/^Bearer\s/, '')
    if (!accessToken) {
        res.status(400)
    }
    res.locals.accessToken = accessToken
    next()
}

export default passAuthHeader
