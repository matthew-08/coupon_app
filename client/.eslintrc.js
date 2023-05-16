module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended"],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
};
