/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@lskjs/eslint-config', 'next/core-web-vitals'],
  settings: {
    'import/resolver': {
      typescript: {
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
