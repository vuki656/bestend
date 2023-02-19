import { ApolloServer } from '@apollo/server'

import type { Context } from '../shared/types'

import { ApolloPluginLandingPage } from './plugins'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const server = new ApolloServer<Context>({
    plugins: [
        ApolloPluginLandingPage(),
    ],
    resolvers,
    typeDefs,
})
