import { logger } from '../shared/logger'
import type { Context } from '../shared/types'

export const context = async (): Promise<Context> => {
    return {
        logger,
        user: {
            email: '1',
            firstName: '1',
            id: '1',
            lastName: '1',
        },
    }
}
