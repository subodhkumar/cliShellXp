const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // Replace with your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
};
