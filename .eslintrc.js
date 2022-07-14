module.exports = {
  root: true,
  ignorePatterns: ['coverage/*'],
  extends: '@react-native-community',
  env: {
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'react-native/no-inline-styles': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'react/no-unstable-nested-components': ['off', {allowAsProps: false}],
      },
    },
  ],
};
