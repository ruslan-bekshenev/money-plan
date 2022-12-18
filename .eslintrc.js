module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "react-app",
    "react-app/jest",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "arrow-body-style": ["error", "as-needed"],
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": [
      "error",
      {
        allow: [
          "_id",
          "__typename",
          "__schema",
          "__ref",
          "_rutarget",
          "_rtgParams",
        ],
        allowAfterThis: true,
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".ts", ".tsx"],
      },
    ],
    "prettier/prettier": "warn",
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/require-await": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/unbound-method": 0,
    "simple-import-sort/imports": [
      "error",
      // more info about custom sorting https://github.com/lydell/eslint-plugin-simple-import-sort/tree/d1d59be47b08733990a8a62f7caf735cdad420f9#custom-grouping
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            "^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)",
          ],
          // Packages. `react` related packages come first.
          ["^react", "^@?\\w"],
          // Types
          ["^.+?[Tt]ype.+?"],
          // Internal packages.
          [
            "^(@|@company|@ui|@components|@core|@views|utils|config|vendored-lib)(/.*|$)",
          ],
          // Internal packages.
          ["^(@type)(/.*|$)"],
          // Hooks imports.
          ["^.*use[A-Z].*$"],
          // Side effect imports.
          ["^\\u0000"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
          // Types imports.
          ["^.*type"],
          // Style imports.
          ["^.*styled.index$"],
        ],
      },
    ],
    "@typescript-eslint/triple-slash-reference": "off",
    "no-return-assign": "off",
    "no-void": "off",
    "react/no-array-index-key": "off",
    // 'no-nested-ternary': 'off',
    "react/jsx-props-no-spreading": "off",
    indent: "off",
    // 'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['off'],
    "import/export": "off",
    "import/no-unresolved": "off",
    // 'import/order': 'off',
    // 'import/extensions': 'off',
    // 'import/prefer-default-export': 'off',
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "react/no-danger": "off",
    "react/display-name": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    // 'no-unused-vars': ['warn', { vars: 'all', argsIgnorePattern: '^_' }],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { vars: "all", argsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
};
