const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathResolve = (p) => path.resolve(__dirname, p);

module.exports = {
  entry: {
    'vue-tag-input': './src/index.js'
  },
  output: {
    filename: 'tag-input.js',
    path: pathResolve('./dist'),
    publicPath: '/',
    library: 'VueTagInput',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: /src/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/
      },
      {
        test: /\.(s)?css$/,
        loader: 'style-loader!css-loader!scss-loader'
      }
    ]
  }
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
} else {
  // development configurations
  module.exports.module.loaders = module.exports.module.loaders.concat([
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }
  ]);

  module.exports.plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './example/index.html',
      inject: false
    })
  ];

  module.exports.devtool = '#source-map';
}
