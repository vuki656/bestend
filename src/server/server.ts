import { ApolloServer } from '@apollo/server'
import dotenv from 'dotenv'

import type { Context } from '../shared/types'

import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'

dotenv.config()

export const server = new ApolloServer<Context>({
    resolvers,
    typeDefs,
})
