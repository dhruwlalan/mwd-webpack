const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/js/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") }),
	]
};