export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
}

export type CreateUserInput = {
    email: Scalars['String']
    firstName: Scalars['String']
    lastName: Scalars['String']
    password: Scalars['String']
}

export type CreateUserPayload = {
    __typename?: 'CreateUserPayload'
    user: User
}

export type DeleteUserInput = {
    id: Scalars['ID']
}

export type Mutation = {
    __typename?: 'Mutation'
    createUser: CreateUserPayload
    deleteUser: Scalars['Boolean']
    updateUser: UpdateUserPayload
}

export type MutationCreateUserArgs = {
    input: CreateUserInput
}

export type MutationDeleteUserArgs = {
    input: DeleteUserInput
}

export type MutationUpdateUserArgs = {
    input: UpdateUserInput
}

export type Query = {
    __typename?: 'Query'
    user?: Maybe<User>
    users: Array<User>
}

export type QueryUserArgs = {
    args: UserArgs
}

export type QueryUsersArgs = {
    args: UsersArgs
}

export type UpdateUserInput = {
    email: Scalars['String']
    firstName: Scalars['String']
    lastName: Scalars['String']
}

export type UpdateUserPayload = {
    __typename?: 'UpdateUserPayload'
    user: User
}

export type User = {
    __typename?: 'User'
    email: Scalars['String']
    firstName: Scalars['String']
    id: Scalars['ID']
    lastName: Scalars['String']
}

export type UserArgs = {
    id: Scalars['ID']
}

export type UsersArgs = {
    skip: Scalars['Int']
}

export type UserPayloadFragment = { __typename?: 'User'; id: string; firstName: string; lastName: string; email: string }
