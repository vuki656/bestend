import type { ApolloServerPlugin } from '@apollo/server'
import { createId } from '@paralleldrive/cuid2'

import { logger } from '../../shared/logger'
import type { Context } from '../../shared/types'

export const ApolloPluginLogger: ApolloServerPlugin<Context> = {
    async requestDidStart(requestContext) {
        // Don't log constant apollo playground pinging query
        if (requestContext.request.operationName === 'IntrospectionQuery') {
            return
        }

        const loggerInstance = logger.child({ requestId: createId() })

        // Set the global logger instance so it's available throughout request
        requestContext.contextValue.logger = loggerInstance

        loggerInstance.info({
            message: 'Request started',
            operationName: requestContext.request.operationName,
            query: requestContext.request.query,
            user: requestContext.contextValue.user,
            variables: requestContext.request.variables,
        })

        return {
            async didEncounterErrors(errorContext) {
                for (const error of errorContext.errors) {
                    loggerInstance.error({
                        error,
                        user: requestContext.contextValue.user,
                    })
                }
            },
            async willSendResponse(responseContext) {
                loggerInstance.info({
                    message: 'Sending response',
                    response: responseContext.response,
                    user: requestContext.contextValue.user,
                })
            },
        }
    },
}
