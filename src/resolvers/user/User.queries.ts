import type { UserModule } from './resolver-types.generated'
import {
    usersValidation,
    userValidation,
} from './User.validation'

const UserQueries: { Query: UserModule.QueryResolvers } = {
    Query: {
        user: (_, variables) => {
            userValidation.parse(variables.args)

            return {
                email: '1',
                firstName: '1',
                id: '1',
                lastName: '1',
            }
        },
        users: (_, variables) => {
            usersValidation.parse(variables.args)

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
