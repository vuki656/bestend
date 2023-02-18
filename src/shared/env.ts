import {
    cleanEnv,
    num,
} from 'envalid'

const env = cleanEnv(process.env, {
    APP_PORT: num(),
})

export default env
