const path = require('path');

module.exports = {
  mode: "none",
  watch: false,
  entry: './src/viewModel.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool:'source-map'
};
