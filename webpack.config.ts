import type { Configuration } from 'webpack'
import nodeExternals from 'webpack-node-externals'

const config: Configuration = {
    entry: './src/index.ts',
    externals: [nodeExternals()],
    mode: 'production',
    module: {
        rules: [
            {
                exclude: /node_modules/u,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.production.json',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    target: 'node',
}

export default config
