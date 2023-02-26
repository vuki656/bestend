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
