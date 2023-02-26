import { z } from 'zod'

export const createUserValidation = z.object({
    email: z
        .string()
        .min(1)
        .max(300),
    firstName: z
        .string()
        .min(1)
        .max(300),
    lastName: z
        .string()
        .min(1)
        .max(300),
    password: z
        .string()
        .min(10)
        .max(300),
})

export const updateUserValidation = z.object({
    email: z
        .string()
        .min(1)
        .max(300),
    firstName: z
        .string()
        .min(1)
        .max(300),
    id: z
        .string()
        .uuid(),
    lastName: z
        .string()
        .min(1)
        .max(300),
})

export const deleteUserValidation = z.object({
    id: z
        .string()
        .uuid(),
})

export const userValidation = z.object({
    id: z
        .string()
        .uuid(),
})

export const usersValidation = z.object({
    skip: z
        .number()
        .int()
        .nullish(),
})
