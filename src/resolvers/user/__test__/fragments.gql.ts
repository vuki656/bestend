import { gql } from 'graphql-tag'

export const USER_PAYLOAD = gql`
    fragment UserPayload on UserType {
        id
        firstName
        lastName
        email
    }
`
