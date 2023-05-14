import { Express } from 'express'
import { handleCreateUser } from '../controller/user.controller'
import validateSchema from '../middleware/validateSchema'
import zUserSchema from '../schema/user.schema'
import hashPass from '../middleware/hashPass'
import zSessionSchema, { zGetSessionSchema } from '../schema/session.schema'
import passCompare from '../middleware/passCompare'
import handleCreateSession, {
    handleGetSession,
} from '../controller/session.controller'
import passAuthHeader from '../middleware/passAuthHeader'

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
    // SESSSIONS
    app.post(
        '/api/sessions',
        validateSchema(zSessionSchema),
        passCompare,
        handleCreateSession
    )
    app.get(
        '/api/sessions',
        validateSchema(zGetSessionSchema),
        passAuthHeader,
        handleGetSession
    )
}

export default routes
