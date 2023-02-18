import type { UserModule } from './resolver-types.generated'

const UserMutations: { Mutation: UserModule.MutationResolvers } = {
    Mutation: {
        createUser: () => {
            console.log(1)

            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
        },
        updateUser: () => {
            console.log(2)

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
