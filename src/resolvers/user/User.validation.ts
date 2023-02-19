import { z } from 'zod'

export const createUserValidation = z.object({
    email: z
        .string()
        .min(1)
        .max(255),
    firstName: z
        .string()
        .min(1)
        .max(255),
    lastName: z
        .string()
        .min(1)
        .max(255),
})

export const updateUserValidation = z.object({
    email: z
        .string()
        .min(1)
        .max(255),
    firstName: z
        .string()
        .min(1)
        .max(255),
    id: z
        .string()
        .uuid(),
    lastName: z
        .string()
        .min(1)
        .max(255),
})

export const userValidation = z.object({
    id: z
        .string()
        .uuid(),
})

export const usersValidation = z.object({
    after: z
        .string()
        .uuid(),
})
