const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'build.js',
    library: 'someLibName',
    libraryTarget: 'umd',
  },
};