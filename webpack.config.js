const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode: mode,
  target: target,

  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
  },

  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(s[ac]|c)ss/i,
        exclude: /\.module.(s[ac]|c)ss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.module.(s[ac]|c)ss/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: `${mode === 'production' ? '[hash:base64]' : '[name]__[local]--[hash:base64:5]'}`,
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)/i,
        type: 'asset/resource',
      },
    ]
  },

  plugins: [
    new DotenvWebpack(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicons/'),
        },
      ]
    })
  ],

  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      images: path.resolve(__dirname, 'src/images/'),
    }
  },

  devtool: mode === 'development' ? 'source-map' : false,
  devServer: {
    contentBase: './dist',
    hot: true,
    overlay: true,
    stats: 'minimal',
  },
};
