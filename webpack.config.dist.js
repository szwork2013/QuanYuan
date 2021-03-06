var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "postcss", "sass?sourceMap"],
    },
    {
      test: /\.css$/,
      loaders: ["style", "css?sourceMap"],
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
};

module.exports = config;