import {
    cleanEnv,
    num,
    str,
} from 'envalid'
import type { Level } from 'pino'

const env = cleanEnv(process.env, {
    APP_LOG_LEVEL: str<Level>({
        choices: ['fatal', 'info', 'debug', 'warn', 'error', 'trace'],
        devDefault: 'info',
    }),
    APP_PORT: num({ devDefault: 4000 }),
})

export default env
