import js from '@eslint/js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import playwright from 'eslint-plugin-playwright';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  {
    ignores: [
      'node_modules/',
      'allure-results/',
      'allure-report/',
      'test-results/',
      'playwright-report/',
      'blob-report/'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts}']
  })),
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir
      }
    },
    rules: {
      'no-console': 'warn',
      'no-undef': 'off'
    }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node
    }
  },
  {
    files: ['tests/**/*.ts'],
    ...playwright.configs['flat/recommended'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-skipped-test': 'error',
      'playwright/no-wait-for-timeout': 'error'
    }
  },
  {
    files: ['scripts/**/*.cjs'],
    rules: {
      'no-console': 'off'
    }
  }
);
