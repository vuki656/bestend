import type { UserModule } from './resolver-types.generated'
import {
    createUserValidation,
    updateUserValidation,
} from './User.validation'

const UserMutations: { Mutation: UserModule.MutationResolvers } = {
    Mutation: {
        createUser: (_, variables) => {
            createUserValidation.parse(variables.input)

            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
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
