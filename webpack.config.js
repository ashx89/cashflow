const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/app/index.html`,
	filename: 'index.html',
	inject: 'body'
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./app/index.js'
	],
	output: {
		path: `${__dirname}/dist`,
		filename: 'index.bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './static/'
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin('app.css')
	]
};
