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
    ppt: {
        pptGenerate() {},
        pptEdit() {},
    },
    userPptOutline: {
        pptOutlineCreate() {},
        pptOutlineDelete() {},
        pptOutlineEdit() {},
        pptOutlineGet() {},
    },
}

export default database
