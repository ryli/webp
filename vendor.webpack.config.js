/*
 * webpack --config vendor.webpack.config.js
 */

const webpack = require('webpack');

const vendors = [
  'vue',
  'vue-router',
  'vuex',
  // ...其它库
];

module.exports = {
  output: {
    path: 'build',
    filename: '[name].js',
    library: '[name]',
  },
  entry: {
    "lib": vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'build/vendor-manifest.json',
      name: '[name]',
      context: __dirname,
    }),
  ],
}
