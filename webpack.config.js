const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve('./dist/js'),
  },
};