import { configs as qwikConfigs } from 'eslint-plugin-qwik';
import { configs as tsConfigs, parser as tsParser } from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      qwik: qwikConfigs.recommended,
    },
    languageOptions: {
      globals: {
        browser: 'readable',
        es2021: 'readable',
        node: 'readable',
      },
      parser: tsParser,
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./tsconfig.json', './vite.config.ts', './prettier.config.mjs', './tailwind.config.mjs', 'postcss.config.mjs'],
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'prefer-spread': 'off',
      'no-case-declarations': 'off',
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_.*$', argsIgnorePattern: '^_.*$' }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
    },
    ignores: ['**/*.log', '**/.DS_Store', '*.', '.vscode/settings.json', 'dist', 'node_modules', 'temp', '.cache', '.vscode', 'vite.config.ts', 'package-lock.json', 'bun.lockb'],
  },
  ...tsConfigs.recommended,
];
