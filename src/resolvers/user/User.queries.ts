import type { UserModule } from './resolver-types.generated'

const UserQueries: { Query: UserModule.QueryResolvers } = {
    Query: {
        user: (_, __, context) => {
            console.info(context.user)

            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
        },
        users: () => {
            console.log(2)

            return [{
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }]
        },
    },
}

export default UserQueries
