import { server } from '../../../server'
import { wipeDatabase } from '../../../shared/wipeDatabase'

// TODO: auth tests for each thing?
describe('User resolver', () => {
    beforeEach(async () => {
        await wipeDatabase()
    })

    afterAll(async () => {
        await wipeDatabase()
    })

    describe('when user query is called', () => {
        it('should return a user', async () => {})
        it('should throw if no user is found', async () => {})
    })

    // describe('when update user mutation is called', () => {
    //     it('should update that user', async () => { })
    //
    //     it('should return an error if user not found', async () => { })
    // })
    //
    // describe('when users query is called', () => {
    //     it('should return users', async () => { })
    // })
    //
    // describe('when deleteUser mutation is called', () => {
    //     it('should delete user', async () => { })
    // })
    //
    describe('when createUser mutation is called', () => {
        it('should throw an error if user already exists', async () => { })

        it('should create user', async () => {
            server.executeOperation<CreateUser()
        })
    })
    //
    // describe('when login mutation is called', () => {
    //     it('should throw an error when sent token is not holding an object', async () => { })
    //
    //     it('should throw an error if user not found in database', async () => { })
    //
    //     it('should return user', async () => { })
    // })
    //
    // describe('when currentUser query is called', () => {
    //     it('should return the current user', async () => { })
    // })
})
