import { startStandaloneServer } from '@apollo/server/standalone'

import {
    context,
    server,
} from './server'
import env from './shared/env'

void startStandaloneServer(
    server,
    {
        context,
        listen: {
            port: env.APP_PORT,
        },
    }
)
    .then((info) => {
        console.info(`Server started on: ${info.url}`)
    })
    .catch((error: unknown) => {
        console.error(error)
    })
