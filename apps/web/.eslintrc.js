/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@lskjs/eslint-config', 'next/core-web-vitals'],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
