import z, { string, TypeOf } from 'zod'

const zSessionSchema = z.object({
    body: z.object({
        email: z
            .string({ required_error: 'Email is required' })
            .email('Not a valid email'),
        password: z
            .string({ required_error: 'Password is required' })
            .min(6, 'Password is too short'),
    }),
})

export const zGetSessionSchema = z.object({
    headers: z.object({
        authorization: z
            .string({ required_error: 'No authorization header supplied' })
            .refine((str) => {
                return str.includes('Bearer')
            }),
    }),
})

export type UserSessionInput = TypeOf<typeof zSessionSchema>['body']

export default zSessionSchema
