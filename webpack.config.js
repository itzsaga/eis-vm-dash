const Dotenv = require('dotenv-webpack');
 
module.exports = {
  entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.'
  },
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe) 
    })
  ]
};
