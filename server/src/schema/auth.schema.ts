import z, { string, TypeOf } from 'zod'

export const zAuthSchema = z.object({
    headers: z.object({
        authorization: z
            .string({ required_error: 'No authorization header supplied' })
            .refine((str) => {
                return str.includes('Bearer')
            }),
    }),
})
