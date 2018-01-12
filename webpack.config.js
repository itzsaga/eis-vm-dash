const Dotenv = require('dotenv-webpack');
 
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new Dotenv({
      path: './.env'//, // Path to .env file (this is the default) 
      //safe: true // load .env.example (defaults to "false" which does not use dotenv-safe) 
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] }
    ]
  }
};
