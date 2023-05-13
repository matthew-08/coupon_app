import { CreateUserInput } from './schema/user.schema'

export interface User {
    email: string
    id: string
}

export interface UserComparePass {
    passHash: string
    email: string
    id: string
}

export interface UserDBInsertInput extends CreateUserInput {
    hashPass: string | null
}
