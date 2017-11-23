var path = require('path')
var webpack = require('webpack')

const paths = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist')
};

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-bootstrap-installer',
    'webpack-hot-middleware/client',
    'babel-polyfill',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    port: 3000,
    contentBase: 'src/',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001'
      }
    }
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    }),
/*    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
      })*/
  ],
  module: {
    rules: [
    {
      enforce: "pre",
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "eslint-loader",
    },    
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: [require('babel-plugin-transform-object-rest-spread')]
        }
      }
    },
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,      
        loader: "url-loader",
        query:{
          limit:'10000',
          name:'[name].[ext]',
          outputPath:'fonts/'
        }      
    },
    {
      test: /\.css$/,      
      loaders: ["style-loader","css-loader"]      
    }    
  ]
  }
}

module.exports.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
);
