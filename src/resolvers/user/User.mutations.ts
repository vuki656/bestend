import { hash } from 'bcrypt'
import orm from '../../shared/orm'

import type { UserModule } from './resolver-types.generated'
import {
    createUserValidation,
    deleteUserValidation,
    updateUserValidation,
} from './User.validation'

const UserMutations: { Mutation: UserModule.MutationResolvers } = {
    Mutation: {
        createUser: async (_, variables) => {
            const {
                email,
                firstName,
                lastName,
                password,
            } = createUserValidation.parse(variables.input)

            const passwordHash = await hash(password, 10)

            const createdUser = await orm.user.create({
                data: {
                    email,
                    firstName,
                    lastName,
                    password: passwordHash,
                },
            })

            return {
                user: createdUser,
            }
        },
        updateUser: async (_, variables) => {
            const {
                email,
                firstName,
                id,
                lastName,
            } = updateUserValidation.parse(variables.input)

            const updatedUser = await orm.user.update({
                where: {
                    id,
                },
                data: {
                    lastName,
                    firstName,
                    email
                }
            })

            return {
                user: updatedUser
            }
        },
        deleteUser: async (_, variables) => {
            const { id } = deleteUserValidation.parse(variables.input)

            orm.user.delete({
                where: {
                    id,
                }
            })

            return true
        },
    },
}

export default UserMutations
