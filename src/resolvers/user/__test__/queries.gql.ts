import gql from "graphql-tag";

import { USER_PAYLOAD } from "./fragments.gql";

export const USER = gql`
    query User($args: UserArgs!) {
        user(args: $args) {
            ...UserPayload
        }
    }
    ${USER_PAYLOAD}
`

export const USERS = gql`
    query Users($args: UsersArgs) {
        users(args: $args) {
            ...UserPayload
        }
    }
    ${USER_PAYLOAD}
`
