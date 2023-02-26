module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json']
    },
    ignorePatterns: [
        ".eslintrc.js"
    ],
    plugins: [
        'react'
    ],
    rules: {
        "@typescript-eslint/triple-slash-reference": 'off'
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
        },
    },
}
