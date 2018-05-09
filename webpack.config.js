/* global process __dirname */
const DEV = process.env.NODE_ENV !== 'production';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const appPath = `${path.resolve(__dirname)}`;

// Theme
const themePath = '/assets';
const themeFullPath = `${appPath}${themePath}`;
const themePublicPath = `${appPath}/public/`;
const themeEntry = `${themeFullPath}/application.js`;
const themeOutput = `${appPath}/public`;

// Outputs
const outputJs = 'scripts/[name].js';
const outputCss = 'styles/[name].css';
const outputFile = '[name].[ext]';
const outputImages = `images/${outputFile}`;
const outputFonts = `fonts/${outputFile}`;

const allModules = {
  rules: [
    {
      test: /\.json$/,
      exclude: /node_modules/,
      use: 'file-loader',
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
      exclude: [/fonts/, /node_modules/],
      use: `file-loader?name=${outputImages}`,
    },
    {
      test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
      exclude: [/images/, /node_modules/],
      use: `file-loader?name=${outputFonts}`,
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader', 'postcss-loader', 'sass-loader',
      ],
    },
  ],
};

const allPlugins = [
  new MiniCssExtractPlugin({
    filename: outputCss,
  }),
];

const allOptimizations = {
  runtimeChunk: false,
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
};

// Use only for production build
if (!DEV) {
  allOptimizations.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
        },
        compress: {
          warnings: false,
          drop_console: true, // eslint-disable-line camelcase
        },
      },
    }),
  ];
  allPlugins.push(new CleanWebpackPlugin([themeOutput]));
}

module.exports = [

  // Theme Skin
  {
    context: path.join(__dirname),
    entry: {
      application: [themeEntry],
    },
    output: {
      path: themeOutput,
      publicPath: themePublicPath,
      filename: outputJs,
    },

    externals: {
      jquery: 'jQuery',
    },

    optimization: allOptimizations,

    mode: 'production',

    module: allModules,

    plugins: allPlugins,

    devtool: DEV ? '#inline-source-map' : '',
  },
];
