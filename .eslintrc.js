/** @type { import('@types/eslint').ESLint.ConfigData } */
module.exports = {
    extends: [require.resolve('@rimac-technology/style-guide/eslint/core')],
    ignorePatterns: [
        '*.generated.*',
        'dist',
        'node_modules',
    ],
    overrides: [
        {
            extends: [require.resolve('@rimac-technology/style-guide/eslint/jest')],
            files: ['**/*.test.ts'],
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.lint.json',
    },
}
