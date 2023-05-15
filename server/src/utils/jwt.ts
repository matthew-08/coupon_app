import jwt from 'jsonwebtoken'
import appEnv from '../appConfig/env'

const privateKey: string | undefined = appEnv.PRIVATE_KEY

type Payload = {
    valid: boolean
    expired: boolean
    decoded: Decoded | null
}

interface Decoded {
    id: string
    email: string
}

const signJwt = async (
    payloadToSign: object,
    options?: jwt.SignOptions | undefined
) => {
    if (!privateKey) {
        throw new Error('No private key available')
    }
    const signedJwt = await jwt.sign(payloadToSign, privateKey, {
        ...(options && options),
    })
    return signedJwt
}

const verifyJwt = async <T>(token: string): Promise<Payload> => {
    try {
        const decoded = jwt.verify(token, appEnv.PRIVATE_KEY as string)
        if (typeof decoded === 'string') {
            throw new Error('JWT error')
        }
        return {
            valid: true,
            expired: false,
            decoded: decoded as Decoded,
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === 'jwt expired',
            decoded: null,
        }
    }
}

export { signJwt, verifyJwt }
