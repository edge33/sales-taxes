module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // enable additional rules
    indent: ['error', 2],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: 'off',
    'no-extra-semi': 'off',

    // override default options for rules from base configurations
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'off',

    '@typescript-eslint/no-extra-semi': ['error'],
    '@typescript-eslint/semi': ['error']
  }
};
