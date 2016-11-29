const webpack = require('webpack');
// const path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './dist/bundle.js',
  },
  module: {
    loaders: [
      // code for webpack v2.1.0-beta23 and above
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'eslint',
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: [
            'latest',
            'stage-0',
            'react',
          ],
        },
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url-loader?limit2000',
      // },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint',
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  resolve: {
    alias: {
      Main: 'src/components/Main.jsx',
      Nav: 'src/components/Nav.jsx',
      Timer: 'src/components/Timer.jsx',
      Countdown: 'src/components/Countdown.jsx',
      Clock: 'src/components/Clock.jsx',
      appStyles: 'src/styles/app.scss',
    },
    root: __dirname,
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  externals: {
    jquery: 'jQuery',
  },
  devtool: 'source-map',
  // devServer: {
  //   inline: true,
  //   contentBase: './build',
  //   port: 3000,
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
