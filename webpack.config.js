'use strict';
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin({ dry: true }),
  new CopyWebpackPlugin([{ from: 'src/manifest.json', to: 'manifest.json' }]),
];

const prodPlugins = [new UglifyJsPlugin()];

const devConfig = {
  devtool: 'source-map',
};

const config = (mode) =>
  Object.assign(
    {},
    {
      entry: {
        background: path.resolve(__dirname, 'src/background.js'),
      },
      output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
      },
      plugins: mode === 'production' ? [].concat(plugins, prodPlugins) : plugins,
    },
    mode === 'production' ? {} : devConfig,
  );

module.exports = (env, argv) => {
  const mode = argv.mode ? argv.mode : 'development';
  return config(mode);
};
