const path = require("path");

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    'plugin:import/errors',
    'plugin:import/warnings',
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    '__DEV__': true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    project: "./tsconfig.json",
    sourceType: 'module'
  },
  plugins: [
    "@typescript-eslint",
    'react',
    'prefer-arrow',
    'react-hooks'
  ],
  root: true, //このプロジェクト内のみに適用 (デフォルトは親ディレクトリまで遡って適用する)
  settings: {
    // 'import/resolver': {
      // eslint-import-resolver-webpackを使用する
      // webpack: {
      //   config: path.join(__dirname, './webpack.web.config.js')
      //   }
      // node: {
      //   extensions: ['.js', 'jsx', '.ts', '.tsx']
      // }
    // },
    react: {
      version: 'detect'
    }
  },
  rules: {
    // eslint official
    'no-console': 'warn',
    "no-unused-vars": "error",

    // @typescript-eslint
    "@typescript-eslint/camelcase": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-parameter-properties': 'off',

    // prefer-arrow
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false
      }
    ],

    // react
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['jsx', 'tsx']
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',

    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    "react-hooks/exhaustive-deps": 'warn',

    // import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/prefer-default-export': 'off',

    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 80,
        tabWidth: 2,
        useTabs: false
      }
    ]
  }
}
