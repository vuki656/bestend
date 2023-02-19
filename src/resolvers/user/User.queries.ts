import orm from '../../shared/orm'

import type { UserModule } from './resolver-types.generated'
import {
    usersValidation,
    userValidation,
} from './User.validation'

const UserQueries: { Query: UserModule.QueryResolvers } = {
    Query: {
        user: (_, variables) => {
            const { id } = userValidation.parse(variables.args)

            return orm.user.findUnique({
                where: {
                    id,
                },
            })
        },
        users: async (_, variables) => {
            const { skip } = usersValidation.parse(variables.args)

            return orm.user.findMany({ skip })
        },
    },
}

export default UserQueries
