const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production', // | 'development' | 'none'
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.bundle.js'
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
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // fallback to style-loader in development
              MiniCssExtractPlugin.loader,
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: 'css/styles.css',
          chunkFilename: '[id].css',
        }),
      ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};