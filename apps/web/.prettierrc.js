const config = require('@lskjs/eslint-config/prettier');

/** @type {import("prettier").Config} */
module.exports = {
  ...config,
  plugins: [...(config.plugins || []), 'prettier-plugin-tailwindcss'],
}
