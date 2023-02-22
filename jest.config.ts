import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
    // globalSetup: './setup.ts',
    // globalTeardown: './teardown.ts',
    preset: 'ts-jest',
    // setupFilesAfterEnv: ['./fileSetup.ts'],
    slowTestThreshold: 15,
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    verbose: false,
}

module.exports = config
