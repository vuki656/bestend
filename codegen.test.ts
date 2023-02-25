import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    generates: {
        './src/shared/types/test-types.generated.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
            ],
            hooks: {
                afterAllFileWrite: "prettier --write"
            }
        },
    },
    documents: './src/resolvers/**/__test__/*.gql.ts',
    schema: './src/resolvers/**/*.graphql',
}

export default config
