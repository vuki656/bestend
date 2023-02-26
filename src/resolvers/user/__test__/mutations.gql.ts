import { gql } from 'graphql-tag'

import { USER_PAYLOAD } from './fragments.gql'

export const UPDATE_USER = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
            user {
                ...UserPayload
            }
        }
    }
    ${USER_PAYLOAD}
`

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

export const DELETE_USER = gql`
    mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input)
    }
`
