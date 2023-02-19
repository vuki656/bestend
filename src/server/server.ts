import { ApolloServer } from '@apollo/server'

import { logger } from '../shared/logger'
import type { Context } from '../shared/types'

import {
    ApolloPluginLandingPage,
    ApolloPluginLogger,
} from './plugins'
import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

export const server = new ApolloServer<Context>({
    logger,
    plugins: [
        ApolloPluginLandingPage,
        ApolloPluginLogger
    ],
    resolvers,
    typeDefs,
})
