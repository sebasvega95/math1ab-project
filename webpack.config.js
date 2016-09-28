const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');


const config = {
  paths: {
    build: `${path.resolve('./build')}/`,
    src: `${path.resolve('./src')}/`
  }
};
const publicPath = process.env.LOCAL ? config.paths.build : '/math1ab-project/build/';

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: path.join(config.paths.src, "js", "client.js"),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
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
    filename: 'client.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
