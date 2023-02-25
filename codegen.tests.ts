import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    documents: './src/resolvers/**/__test__/*.gql.ts',
    generates: {
        './src/shared/types/test-types.generated.ts': {
            hooks: {
                afterAllFileWrite: 'prettier --write',
            },
            plugins: [
                'typescript',
                'typescript-operations',
            ],
        },
    },
    overwrite: true,
    schema: './src/resolvers/**/*.graphql',
}

export default config
