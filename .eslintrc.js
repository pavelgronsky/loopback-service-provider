module.exports = {
  extends: ['@loopback/eslint-config'],
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'variable-name': [true, 'allow-leading-underscore'],
      },
    },
  ],
};
