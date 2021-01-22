module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // enable additional rules
    indent: ['error', 2],
    'linebreak-style': ['error', 'ansi'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],

    // override default options for rules from base configurations
    'comma-dangle': ['error', 'always'],
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'no-console': 'off',
  },
};
