const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');


const config = {
  paths: {
    build: `${path.resolve('./build')}/`,
    src: `${path.resolve('./src')}/`
  }
};
const publicPath = debug ? config.paths.build : '/math1ab-project/build/';

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: {
    vendor: [
      'jquery',
      'react',
      'react-bootstrap',
      'react-router'
    ],
    math1a: path.join(config.paths.src, 'js', 'math1a.js')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        // loader: 'url-loader?limit=8192'
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  output: {
    path: config.paths.build,
    publicPath: publicPath,
    filename: '[name].bundle.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      mangle: false,
      sourcemap: false
    })
  ]
};
