module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        'react/function-component-definition': 'error', // Disable the original rule
        'prettier/prettier': [
          'error',
          {
            arrowParens: 'always',
            arrowFunctionParentheses: 'always',
          },
        ],
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './',
      },
    ],
    'react/no-array-index-key': 'off',
    'react/jsx-one-expression-per-line': [
      'off',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-indent': ['off', 2],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'consistent-return': ['off', { treatUndefinedAsUnspecified: true }],
    'no-underscore-dangle': ['off', { allowInObjectDestructuring: false }],
    'no-restricted-globals': ['off', 'event', 'fdescribe'],
  },
};
