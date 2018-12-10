const path = require('path');

module.exports = {
  mode: "none",
  watch: true,
  entry: './src/vm.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool:'source-map'
};
