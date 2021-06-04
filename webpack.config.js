const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProductionBuild = process.env.NODE_ENV === 'production';

const PATHS = {
  build: path.join(__dirname, 'dist'),
  translations: path.join(__dirname, 'app', 'translations'),
  public: path.join(__dirname, 'public')
};

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'app/index.tsx'),
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      IS_PRODUCTION_BUILD: isProductionBuild,
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'local')
    }),
    new HtmlWebpackPlugin({
      title: 'Dishes',
      template: 'app/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATHS.translations,
          to: PATHS.build
        }
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATHS.public,
          to: PATHS.build
        }
      ]
    })
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    contentBase: PATHS.build,
    publicPath: `http://localhost:3000/`,
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, 'tsconfig.json')
      })
    ],
    extensions: ['.ts', '.js', '.json', '.tsx']
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: PATHS.build
  }
};
