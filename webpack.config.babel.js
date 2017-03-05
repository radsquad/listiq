import { resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default function (env = {}) {
  var config = {
    context: resolve('src'),
    entry: './',
    output: {
      filename: 'bundle.js',
      path: resolve('dist')
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
        },
        {
          test: /\.svg$/,
          use: ['file-loader']
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css'),
      new HtmlWebpackPlugin({
        template: '../public/index.html',
        inject: true
      })
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  }

  config.devtool = env.production ? 'source-map' : 'eval'
  return config
}
