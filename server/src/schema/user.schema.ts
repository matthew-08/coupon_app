import z, { string, TypeOf } from 'zod'

const zUserSchema = z.object({
    body: z
        .object({
            name: z.string({ required_error: 'Name is required' }),
            email: z
                .string({ required_error: 'Email is required' })
                .email('Not a valid email'),
            password: z
                .string({ required_error: 'Password is required' })
                .min(6, 'Password is too short'),
            confirmPassword: z.string({
                required_error: 'Password is required',
            }),
        })
        .refine(
            (data) => {
                return data.password === data.confirmPassword
            },
            {
                message: 'Passwords do not match',
                path: ['passwordConfirmation'],
            }
        ),
})

export type CreateUserInput = TypeOf<typeof zUserSchema>['body']

export default zUserSchema
