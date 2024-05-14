// eslint.config.js using CommonJS syntax for Node.js compatibility
import { defineConfig } from '@eslint/eslintrc';

export default defineConfig({
    env: {
        browser: true,  // Frontend specific environment
        es2021: true,
        node: true      // For server-side or build scripts
    },
    extends: [
        'plugin:react/recommended',           // Basic React linting
        'plugin:@typescript-eslint/recommended',  // TypeScript rules
        'plugin:react-hooks/recommended',     // Ensures hooks are used correctly
        'plugin:jsx-a11y/recommended'         // Accessibility checks
    ],
    parser: '@typescript-eslint/parser',     // Specifies the TypeScript parser
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,                   // Modern ECMAScript features
        sourceType: 'module'
    },
    settings: {
        react: {
            version: 'detect' // Automatically detect the React version for linting compatibility
        }
    },
    rules: {
        'react/react-in-jsx-scope': 'off', // Not needed with React 17+ where JSX is transformed without React in scope
        'react/jsx-filename-extension': [1, { 'extensions': ['.tsx', '.ts'] }],  // Allow JSX in .tsx and .ts files
        '@typescript-eslint/explicit-module-boundary-types': 'off'  // Disable enforcing return types on functions
    }
});
