import { gql } from 'graphql-tag'

import { USER_PAYLOAD } from './fragments.gql'

export const CREATE_USER = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            user {
                ...UserPayload
            }
        }
    }
    ${USER_PAYLOAD}
`
