import { faker } from '@faker-js/faker'

import { server } from '../../../server'
import orm from '../../../shared/orm'
import { wipeDatabase } from '../../../shared/tests'
import type {
    CreateUserMutation,
    CreateUserMutationVariables,
    DeleteUserMutation,
    DeleteUserMutationVariables,
    UpdateUserMutation,
    UpdateUserMutationVariables,
    UserQuery,
    UserQueryVariables,
    UsersQuery,
    UsersQueryVariables,
} from '../../../shared/types/test-types.generated'
import type {
    CreateUserInput,
    UpdateUserInput,
} from '../../graphql-types.generated'

import {
    CREATE_USER,
    DELETE_USER,
    UPDATE_USER,
} from './mutations.gql'
import {
    USER,
    USERS,
} from './queries.gql'

// TODO: auth tests for each thing?
describe('User resolver', () => {
    beforeEach(async () => {
        await wipeDatabase()
    })

    afterAll(async () => {
        await wipeDatabase()
    })

    describe('when user query is called', () => {
        it('should return a user', async () => {
            const existingUser = await orm.user.create({
                data: {
                    email: faker.internet.email(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    password: faker.internet.password(),
                },
            })

            const response = await server.executeOperation<
                UserQuery,
                UserQueryVariables
            >({
                query: USER,
                variables: {
                    args: {
                        id: existingUser.id,
                    },
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            expect(existingUser).toMatchObject(response.body.singleResult.data?.user ?? {})
        })

        it('should throw if no user is found', async () => {
            const response = await server.executeOperation<
                UserQuery,
                UserQueryVariables
            >({
                query: USER,
                variables: {
                    args: {
                        id: faker.datatype.uuid(),
                    },
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            expect(response.body.singleResult.errors?.[0]?.message).toContain('No User found')
        })
    })

    describe('when users query is called', () => {
        it('should return users', async () => {
            const createUserActions = [...new Array(20)].map(() => {
                return orm.user.create({
                    data: {
                        email: faker.internet.email(),
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        password: faker.internet.password(),
                    },
                })
            })

            const existingUsers = await Promise.all(createUserActions)

            const response = await server.executeOperation<
                UsersQuery,
                UsersQueryVariables // TODO: vars shouldn't be needed
            >({ query: USERS, variables: { args: {} } })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            console.log(response.body.singleResult)

            expect(response.body.singleResult.data?.users).toHaveLength(existingUsers.length)
        })
    })

    describe('when update user mutation is called', () => {
        it('should update that user', async () => {
            const existingUser = await orm.user.create({
                data: {
                    email: faker.internet.email(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    password: faker.internet.password(),
                },
            })

            const input: Omit<UpdateUserInput, 'id'> = {
                email: faker.internet.email(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
            }

            const response = await server.executeOperation<
                UpdateUserMutation,
                UpdateUserMutationVariables
            >({
                query: UPDATE_USER,
                variables: {
                    input: {
                        id: existingUser.id,
                        ...input,
                    },
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            expect(response.body.singleResult.data?.updateUser.user).toMatchObject({
                id: existingUser.id,
                ...input,
            })
        })

        it('should return an error if user not found', async () => {
            const response = await server.executeOperation<
                UpdateUserMutation,
                UpdateUserMutationVariables
            >({
                query: UPDATE_USER,
                variables: {
                    input: {
                        email: faker.internet.email(),
                        firstName: faker.name.firstName(),
                        id: faker.datatype.uuid(),
                        lastName: faker.name.lastName(),
                    },
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            expect(response.body.singleResult.errors?.[0]?.message).toContain('Record to update not found')
        })
    })

    describe('when deleteUser mutation is called', () => {
        it('should delete user', async () => {
            const existingUser = await orm.user.create({
                data: {
                    email: faker.internet.email(),
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    password: faker.internet.password(),
                },
            })

            const response = await server.executeOperation<
                DeleteUserMutation,
                DeleteUserMutationVariables
            >({
                query: DELETE_USER,
                variables: {
                    input: {
                        id: existingUser.id,
                    },
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            expect(response.body.singleResult.data?.deleteUser).toBe(true)
        })
    })

    describe('when createUser mutation is called', () => {
        it('should throw an error if user by the same email already exists', async () => {
            const EMAIL = faker.internet.email()

            await orm.user.create({
                data: {
                    email: EMAIL,
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    password: faker.internet.password(),
                },
            })

            const response = await server.executeOperation<
                CreateUserMutation,
                CreateUserMutationVariables
            >({
                query: CREATE_USER,
                variables: {
                    input: {
                        email: EMAIL,
                        firstName: faker.name.firstName(),
                        lastName: faker.name.lastName(),
                        password: faker.internet.password(),
                    },
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            expect(response.body.singleResult.errors?.[0]?.message).toContain('Unique constraint failed on the fields: (`email`)')
        })

        it('should create user', async () => {
            const input: CreateUserInput = {
                email: faker.internet.email(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                password: faker.internet.password(),
            }

            const response = await server.executeOperation<
                CreateUserMutation,
                CreateUserMutationVariables
            >({
                query: CREATE_USER,
                variables: {
                    input,
                },
            })

            if (response.body.kind === 'incremental') {
                throw new Error('Wrong response type')
            }

            const user = response.body.singleResult.data?.createUser.user

            expect(user).toMatchObject({
                email: user?.email,
                firstName: user?.firstName,
                lastName: user?.lastName,
            })
        })
    })

    describe('when login mutation is called', () => {
        it.todo('should throw an error when sent token is not holding an object')

        it.todo('should throw an error if user not found in database')

        it.todo('should return user')
    })

    describe('when currentUser query is called', () => {
        it.todo('should return the current user')
    })
})
