import type { startStandaloneServer } from '@apollo/server/standalone'

import { context } from './context'

export const options: Parameters<typeof startStandaloneServer>[1] = {
    context,
    listen: { port: 4000 },
}
