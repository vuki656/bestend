import { startStandaloneServer } from '@apollo/server/standalone'

import { server } from './server'

void startStandaloneServer(
    server,
    {
        listen: { port: 4000 },
    }
)
    .then((info) => {
        console.info(`Server started on: ${info.url}`)
    })
    .catch((error: unknown) => {
        console.error(error)
    })
