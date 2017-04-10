const webpack = require('webpack');
const WebpackChunkHash = require('webpack-chunk-hash');

module.exports = {
	entry: './main.js',
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js',
	},
	plugins: [
		new WebpackChunkHash(),
		new webpack.optimize.CommonsChunkPlugin({
			names: ['manifest']
		}),
	],
};
