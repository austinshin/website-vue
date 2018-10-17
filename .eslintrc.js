// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    "import/no-unresolved": 0,
    "import/no-unassigned-import": 0,
    "semi": ["error", "never"],
    "no-console": "off",
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "always",
        "named": "always",
        "asyncArrow": "always"
      }
    ],
    'vue/html-self-closing': 'off',
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
