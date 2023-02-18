import type { User } from '../../resolvers/graphql-types.generated'

export type Context = {
    user: User
}
