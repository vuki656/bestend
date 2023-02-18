/** @type { import('@types/eslint').ESLint.ConfigData } */
module.exports = {
    extends: [require.resolve('@rimac-technology/style-guide/eslint/core')],
    ignorePatterns: [
        '*.generated.*',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.lint.json',
    },
}
