import express from 'express'
import http from 'http'
import env from './appConfig/env'
import database from './db/database'
import applyMiddleware from './appConfig/applyMiddleware'
import routes from './routes'

const makeApp = (appDatabase: typeof database) => {
    // Create express app
    const app = express()
    // Apply application level middleware
    applyMiddleware(app)
    // Start server
    const server = http.createServer(app)

    server.listen(env.APP_PORT, () => {
        console.log(`Server is listening on ${env.APP_PORT}`)
    })

    routes(app)

    return {
        app,
        appDatabase,
        server,
    }
}

export default makeApp
