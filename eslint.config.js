import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import playwright from 'eslint-plugin-playwright';
import prettierPlugin from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules', 'playwright-report', 'test-results'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      import: importPlugin,
      playwright,
      prettier: prettierPlugin,
    },
    rules: {
      'import/order': ['error', { 'newlines-between': 'always' }],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': ['warn', { allowTernary: true }],
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': 'error',
    },
  },
];
