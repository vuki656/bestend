import orm from '../../shared/orm'

import type { UserModule } from './resolver-types.generated'
import {
    createUserValidation,
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

            return orm.user.create({
                data: {
                    email,
                    firstName,
                    lastName,
                    password,
                },
            })
        },
        updateUser: (_, variables) => {
            updateUserValidation.parse(variables.input)

            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
        },
    },
}

export default UserMutations
