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

export interface CouponInfo {
    deal: string
    id: number
    company: string
    validThroughStart: string
    validThroughEnd: string
    icon: string
}
