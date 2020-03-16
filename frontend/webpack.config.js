var path = require('path');
var webpack = require('webpack');
module.exports = {
    mode: 'production', // | 'development' | 'none'
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
     module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};