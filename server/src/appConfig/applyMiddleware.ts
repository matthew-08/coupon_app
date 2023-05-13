import type { Application } from 'express'
import express from 'express'

const applyMiddleware = (app: Application) => {
    app.use(express.json())
    return app
}

export default applyMiddleware
