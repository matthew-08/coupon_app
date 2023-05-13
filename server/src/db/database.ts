import { CreateUserInput } from '../schema/user.schema'
import { UserDBInsertInput } from '../types'
import sqlQueries from './sqlQueries'

const database = {
    users: {
        async createUser(user: UserDBInsertInput) {
            return await sqlQueries.user.createUser(user)
        },
        editUser() {},
        updateUser() {},
        getUser() {},
    },
    coupons: {
        async getAllCoupons() {},
    },
}

export default database
