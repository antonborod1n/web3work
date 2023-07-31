const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_registration: path.resolve(__dirname, './src/index_registration.js'),
    index_authorization: path.resolve(__dirname, './src/index_authorization.js'),
    index_vacancies: path.resolve(__dirname, './src/index_vacancies.js'),
    index_сompany: path.resolve(__dirname, './src/index_сompany.js'),
    index_user: path.resolve(__dirname, './src/index_user.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/vacancies.html'),
      filename: 'vacancies.html',
      chunks: ['index_vacancies'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/registration.html'),
      filename: 'registration.html',
      chunks: ['index_registration'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/authorization.html'),
      filename: 'authorization.html',
      chunks: ['index_authorization'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/сompany.html'),
      filename: 'сompany.html',
      chunks: ['index_сompany'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/user.html'),
      filename: 'user.html',
      chunks: ['index_user'],
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/images',
          to: 'images',
        },
      ],
    }),
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // картинки
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //Шрифты и svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      //SCSS to CSS
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // HTML Templates with html-loader
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true,
          },
        },
      },
    ],
  },

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    //contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all',
        },
      },
    },
  },
};
