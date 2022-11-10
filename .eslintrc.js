module.exports = {
  ignorePatterns: ['./build/**/*'],
  overrides: [
    {
      files: ['*.js'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
          experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
        requireConfigFile: false,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        node: true,
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'tsconfig.eslint.json',
        sourceType: 'module',
      },
      plugins: [
        '@typescript-eslint',
        'prettier',
        'eslint-plugin-react',
        'import',
        'simple-import-sort',
        'unused-imports',
      ],
      rules: {
        'prettier/prettier': ['warn'],
        'curly': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'smart'],
        'arrow-body-style': 'error',
        'no-var': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            'accessibility': 'no-public',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            'allowExpressions': true,
          },
        ],
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^\\w'], // react, from 'package'
              ['^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // ./ ../ and paths in tsconfig
              ['^\\u0000'], // side effect imports ex: import 'something'
            ],
          },
        ],
        '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'import/no-absolute-path': 'error',
        'import/no-useless-path-segments': 'error',
        'sort-imports': 'off',
        'import/order': 'off',
      },
    },
  ],
};
