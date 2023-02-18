import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './src/resolvers/': {
            plugins: [
                'typescript',
                'typescript-resolvers',
            ],
            preset: 'graphql-modules',
            presetConfig: {
                baseTypesPath: 'graphql-types.generated.ts',
                filename: 'resolver-types.generated.ts',
                useGraphQLModules: false,
            },
        },
    },
    schema: './src/resolvers/**/*.graphql',
}

export default config
