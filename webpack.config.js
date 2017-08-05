 const path = require('path');
 const webpack = require('webpack');

 module.exports = {
   entry: './site/src/index.js',
   output: {
     path: path.resolve(__dirname, 'site', 'dist'),
     filename: 'index.js'
   },
   module: {
     loaders: [
       {
         test: /\.js$/,
         loader: 'babel-loader',
       }
     ]
   },
   stats: {
     colors: true
   },
   devtool: 'source-map'
 };
