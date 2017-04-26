const path = require('path')
const webpack = require('webpack')

const config = {
  entry: {
    'simple-custom-url-scheme': './src/simple-custom-url-scheme.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
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
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
  config.plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = config
