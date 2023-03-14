module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'object-curly-newline': 'off',
    allowArrowFunctions: 0,
  },
};
