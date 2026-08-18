import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

// TypeScript files are checked by `npm run typecheck` (tsc) and formatted by
// Prettier; typescript-eslint does not support TypeScript 7 yet, so ESLint
// rules here only cover plain JS/MJS/CJS sources.
export default [
    {
        ignores: ['build/**', '.docusaurus/**', 'node_modules/**'],
    },
    js.configs.recommended,
    {
        files: ['**/*.{js,cjs}', 'plugins/**/*.js'],
        languageOptions: {
            sourceType: 'commonjs',
            globals: globals.node,
        },
    },
    {
        files: ['**/*.mjs'],
        languageOptions: {
            globals: globals.node,
        },
    },
    prettierConfig,
    {
        files: ['**/*.{js,mjs,cjs}'],
        plugins: {prettier},
        rules: {
            // Prettier owns formatting; tabWidth: 4 in .prettierrc.json is the
            // single source of truth for indentation.
            'prettier/prettier': 'error',
        },
    },
];
