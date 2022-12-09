/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/airbnb',
    'plugin:json/recommended',
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      'extends': [
        'plugin:cypress/recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    curly: ['warn', 'all'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'never'],
    indent: ['warn', 2, { SwitchCase: 1 }],
  },
}
