import { faker } from '@faker-js/faker'

import { server } from '../../../server'
import orm from '../../../shared/orm'
import type {
    CreateUserMutation,
    CreateUserMutationVariables,
} from '../../../shared/types/test-types.generated'
import { wipeDatabase } from '../../../shared/wipeDatabase'
import type { CreateUserInput } from '../../graphql-types.generated'

import { CREATE_USER } from './mutations.gql'

// TODO: auth tests for each thing?
describe('User resolver', () => {
    beforeEach(async () => {
        await wipeDatabase()
    })

    afterAll(async () => {
        await wipeDatabase()
    })

    describe('when user query is called', () => {
        it.todo('should return a user')

        it.todo('should throw if no user is found')
    })

    describe('when update user mutation is called', () => {
        it.todo('should update that user')

        it.todo('should return an error if user not found')
    })

    describe('when users query is called', () => {
        it.todo('should return users')
    })

    describe('when deleteUser mutation is called', () => {
        it.todo('should delete user')
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
