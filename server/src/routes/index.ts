import { Express } from 'express'
import { handleCreateUser } from '../controller/user.controller'
import validateSchema from '../middleware/validateSchema'
import zUserSchema from '../schema/user.schema'

const routes = (app: Express) => {
    app.get('/healthcheck', (req, res) => {
        res.sendStatus(200)
    })
    app.get('/api/coupons')
    app.post('/api/user', validateSchema(zUserSchema), handleCreateUser)
}

export default routes
