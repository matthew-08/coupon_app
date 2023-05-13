import type { Application } from 'express'
import express from 'express'
import cors from 'cors'

const applyMiddleware = (app: Application) => {
    app.use(express.json())
    app.use(
        cors({
            origin: '*',
        })
    )
    return app
}

export default applyMiddleware
