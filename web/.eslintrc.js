/*
 * @Author: your name
 * @Date: 2020-03-11 22:18:58
 * @LastEditTime: 2020-03-14 14:09:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \video-fullstack-web\web\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prettier/prettier': ['error', {
      'endOfLine':'crlf'
    }]
  }
}
