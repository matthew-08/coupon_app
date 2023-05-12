import { Express } from 'express'

const routes = (app: Express) => {
    app.get('/healthcheck', (req, res) => {
        res.sendStatus(200)
    })
    app.get('/api/coupons')
    app.post('/api/user')
}

export default routes
