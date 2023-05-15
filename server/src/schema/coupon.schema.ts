import z, { string, TypeOf } from 'zod'

export const zCouponSchema = z.object({
    params: z.object({
        id: z.string({ required_error: 'Params are required' }),
    }),
})
