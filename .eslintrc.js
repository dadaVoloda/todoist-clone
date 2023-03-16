module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'warn',
    semi: 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],
  },
  root: true,
}
