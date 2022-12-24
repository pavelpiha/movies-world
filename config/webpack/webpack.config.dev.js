const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  entry: helpers.root('src/index.tsx'),
  output: {
    filename: '[name].chunk.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    path: helpers.root('dev'),
  },
  resolve: {
    modules: [helpers.root('src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
  },
  watch: true,
  devServer: {
    historyApiFallback: true,
    static: {
      directory: helpers.root('dev'),
    },
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    devMiddleware: {
      stats: {
        colors: true,
        hash: false,
        version: true,
        timings: true,
        assets: true,
        chunks: false,
        modules: false,
        publicPath: true,
      },
    },
    hot: true,
    port: 3000,
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'MovieWorld',
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', '@babel/preset-typescript']],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'assets/',
      },
    ],
  },
};
