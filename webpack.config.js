var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: __dirname + '/dist/build',
    filename: 'bundle.js'
  }
};