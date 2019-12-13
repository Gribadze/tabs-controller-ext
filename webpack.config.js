'use strict';
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin({ dry: true }),
  new CopyWebpackPlugin([{ from: 'src/manifest.json', to: 'manifest.json' }]),
];

const devConfig = {
  devtool: 'source-map',
};

const prodConfig = {
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};

const config = {
  entry: {
    background: path.resolve(__dirname, 'src/background.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};

const getConfig = (mode) =>
  Object.assign({}, config, { plugins }, mode === 'production' ? prodConfig : devConfig);

module.exports = (env, argv) => {
  const mode = argv.mode ? argv.mode : 'development';
  return getConfig(mode);
};
