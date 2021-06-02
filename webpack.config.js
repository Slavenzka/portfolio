const path = require(`path`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  target: 'web',
  entry: [`./src/scripts/app.js`, `./src/styles/index.scss`],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, `public`),
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, `public`),
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      // Extracts the compiled CSS from the SASS files defined in the entry
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            // Interprets CSS
            loader: "css-loader",
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader' // 将 Sass 编译成 CSS
          },
        ]
      },
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/fonts/',
          publicPath: url => '../assets/fonts/' + url
        }
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/',
          publicPath: url => '../assets/images/' + url
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator']
          }
        }
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: './css/index.css',
      allChunks: true
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        safe: true
      }
    }),
    new Dotenv(),
  ],
}
