import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    generates: {
        './src/resolvers/': {
            config: {
                contextType: '../shared/types#Context',
                useIndexSignature: true,
            },
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
            hooks: {
                afterOneFileWrite: 'prettier --write',
            },
        },
    },
    schema: './src/resolvers/**/*.graphql',
}

export default config
