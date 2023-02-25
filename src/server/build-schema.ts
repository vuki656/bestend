import { writeFileSync } from 'fs'
import { join } from 'path'

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { print } from 'graphql'

const typesDefsArray = loadFilesSync(
    join(__dirname, '../resolvers/**/*.graphql'),
    { recursive: true }
)

export const typeDefs = mergeTypeDefs(typesDefsArray)

writeFileSync('./schema.graphql', print(typeDefs))
