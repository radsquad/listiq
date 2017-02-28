import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default function (env = 'development') {
  var config = {
    context: resolve('src'),
    entry: './',
    output: {
      filename: 'bundle.js',
      path: resolve('public/dist/'),
      publicPath: '/public/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: /src/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              'css-loader',
              'postcss-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  }

  config.devtool = env.production ? 'source-map' : 'eval'
  return config
}
