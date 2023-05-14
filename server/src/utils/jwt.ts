import jwt from 'jsonwebtoken'
import appEnv from '../appConfig/env'

const privateKey: string | undefined = appEnv.PRIVATE_KEY

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

const verifyJwt = async (token: string) => {
    try {
        const decoded = jwt.verify(token, appEnv.PRIVATE_KEY as string)
        return {
            valid: true,
            expired: false,
            decoded,
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
