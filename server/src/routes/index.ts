import { Express } from 'express'
import { handleCreateUser } from '../controller/user.controller'
import validateSchema from '../middleware/validateSchema'
import zUserSchema from '../schema/user.schema'
import hashPass from '../middleware/hashPass'
import zSessionSchema from '../schema/session.schema'

const routes = (app: Express) => {
    app.get('/healthcheck', (req, res) => {
        res.sendStatus(200)
    })
    // COUPONS
    app.get('/api/coupons')
    // USER
    app.post(
        '/api/users',
        validateSchema(zUserSchema),
        hashPass,
        handleCreateUser
    )

    app.post('/api/sessions', validateSchema(zSessionSchema))
}

export default routes
