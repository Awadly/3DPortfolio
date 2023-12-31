/* eslint-disable */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['react-native'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'max-len': [2, 100],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs'],
    camelcase: 0,
    'class-methods-use-this': 0,
    curly: [2, 'all'],
    'eol-last': 2,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'linebreak-style': 0,
    'lines-between-class-members': 0,
    'no-async-promise-executor': 0,
    bitwise: 0,
    'no-case-declarations': 0,
    'no-confusing-arrow': 0,
    'no-else-return': 0,
    'no-mixed-operators': 0,
    'object-curly-newline': 0,
    'operator-linebreak': ['error', 'after'],
    'prefer-destructuring': 0,
    'default-param-last': 0,
    'max-lines': ['error', 999],

    'react/default-props-match-prop-types': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/static-property-placement': 0,
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'react/no-unstable-nested-components': 0,

    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,

    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-single-element-style-arrays': 2,

    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-absolute-path': 2,
    'import/no-self-import': 2,
    'import/no-cycle': 2,
    'import/no-useless-path-segments': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'import/no-mutable-exports': 2,
    'import/no-unused-modules': [2, { unusedExports: true, missingExports: true }],
    'import/unambiguous': 0,
    'import/no-commonjs': 2,
    'import/no-nodejs-modules': 2,
    'import/first': 2,
    'import/no-duplicates': [2, { 'prefer-inline': true }],
    'import/extensions': [2, 'never'],
    'import/newline-after-import': 2,
    'import/no-unassigned-import': [2, { allow: ['**/*.css'] }],
    'import/prefer-default-export': 0,
    'import/no-relative-packages': 0,
    'testing-library/render-result-naming-convention': 0,
    'testing-library/await-async-query': 0,
    'security/detect-object-injection': 0,
  },
  overrides: [
    {
      files: ['./src/main.jsx'],
      rules: {
        'import/no-unused-modules': 'off',
      },
    },
  ],
};