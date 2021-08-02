const path = require('path');

module.exports = {
  globals: {
    graphql: false,
    config: false,
  },
  rules: {
    'global-require': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'import/order': 'off',
    'import/named': 'off',
    'import/no-useless-path-segments': 'off',
    'import/no-duplicates': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-self-import': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'prefer-arrow-callback': 'off',
    'jsx-a11y/label-has-associated-control': 'off', // this rule doesn't work..
  },
  parserOptions: { 
    sourceType: 'module',
    ecmaVersion: 2018
  },
  overrides: [
    {
      files: ['src/examples/**'],
      rules: {
        'comma-dangle': 'off',
        'max-classes-per-file': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['config.js', 'gatsby-config.js', 'gatsby-node.js'],
      settings: {
        'import/resolver': 'node'
      }
    }
  ],
};
