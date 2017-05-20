const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    'simple-custom-url-scheme': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    library: 'SimpleCustomURLScheme'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = config
