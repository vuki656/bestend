import pino from 'pino'

import env from './env'

export const logger = pino({
    level: env.APP_LOG_LEVEL,
    redact: ['variables.input.password'],
})
