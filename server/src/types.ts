interface User {
    email: string
    id: string
}

interface UserDBInsertInput {
    email: string
    name: string
    hashPass: string
}
