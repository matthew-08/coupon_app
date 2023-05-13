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

export { signJwt }
