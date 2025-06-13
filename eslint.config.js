// ./eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// Common
import pluginPromise from 'eslint-plugin-promise';
// import eslintPluginUnicorn from 'eslint-plugin-unicorn';
// import pluginSecurity from 'eslint-plugin-security';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import importPlugin from 'eslint-plugin-import';

// React
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },

  // ====== Базовые рекомендованные настройки ESLint =====
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  // ====== Common рекомендованные настройки ESLint =====
  pluginPromise.configs['flat/recommended'],
  // eslintPluginUnicorn.configs.recommended,
  // {
  //   rules: { 'unicorn/better-regex': 'warn' },
  // },
  // pluginSecurity.configs.recommended,
  eslintPluginPrettierRecommended,
  // importPlugin.flatConfigs.recommended,
  // {
  //   files: ['**/*.{js,mjs,cjs}'],
  //   languageOptions: {
  //     ecmaVersion: 'latest',
  //     sourceType: 'module',
  //   },
  //   rules: {
  //     'no-unused-vars': 'off',
  //     'import/no-dynamic-require': 'warn',
  //     'import/no-nodejs-modules': 'warn',
  //   },
  // },

  // ================ Настройки для React ================
  // pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect', // или, например, '18.0'
      },
    },
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
  },
  pluginReact.configs.flat['jsx-runtime'], // Add this if you are using React 17+
  
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    // ...
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ... any rules you want
      'jsx-a11y/alt-text': 'error',
    },
    // ... others are omitted for brevity
  },
];