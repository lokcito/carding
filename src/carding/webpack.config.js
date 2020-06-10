var webpack = require('webpack');
const path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var deploy = path.resolve(__dirname, 'dist');
deploy = path.resolve(__dirname, '../../../../php/reacttest/');
module.exports = {
	context: __dirname,
	//https://stackoverflow.com/a/41378514
	// externals: {
	//     'react': 'React',
	//     'react-dom': 'ReactDOM',
	//     'react-router': 'ReactRouter'
	// },	
	entry: {
		app: "./src/index.js",
		// vendor: ['react', 'react-dom'],
	},
  output: {
    path: deploy,
    filename: '[name].js',
    // filename: '[name].[contenthash].js',
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_module/,
				use: ['babel-loader'],
			},
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
		]
	},
  plugins: [
    new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  ],
  // https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            // console.log("><", module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/));
            const version = JSON.stringify(require("." + module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[0] + "/package.json").version);
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}-${version.replace(/"/g, '')}`;
            // return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			filename: 'index.html'
		}),
		new CompressionPlugin(),
		//https://www.codementor.io/@drewpowers/high-performance-webpack-config-for-front-end-delivery-90sqic1qa#5-commonschunkplugin-for-vendor-caching
	  // new webpack.optimize.CommonsChunkPlugin({
	  //   name: 'vendor',
	  // }),		
	]
};
