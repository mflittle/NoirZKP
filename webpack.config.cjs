const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('Webpack config is being used');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.json', '.wasm'],
    fallback: {
      crypto: false,
      stream: false,
      os: require.resolve('os-browserify/browser'),
      fs: false,
      path: false,
    },
	alias: {
      '@noir-lang/noir_js': path.resolve(__dirname, 'node_modules/@noir-lang/noir_js')
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
	  filename: 'index.html',
      inject: 'body',
      scriptLoading: 'defer'
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
	historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  experiments: {
    asyncWebAssembly: true,
  },
};