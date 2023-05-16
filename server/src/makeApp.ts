import express from 'express'
import http from 'http'
import env from './appConfig/env'
import database from './db/database'
import applyMiddleware from './appConfig/applyMiddleware'
import routes from './routes'

const makeApp = (appDatabase: typeof database) => {
    // Create express app
    const app = express()
    // Apply app middleware
    applyMiddleware(app)
    // Start server
    const server = http.createServer(app)

    const port = Number(process.env.PORT) || 3000
    server.listen(port, '0.0.0.0', () => {})

    routes(app)

    return {
        app,
        appDatabase,
        server,
    }
}

export default makeApp
