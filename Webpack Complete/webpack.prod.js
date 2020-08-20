const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/js/index.js'
	},
	output: {
		filename: 'bundle.[contentHash].js',
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
			{ test: /\.scss$/ , use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html") }),
		new MiniCssExtractPlugin({ filename: 'style.[contentHash].css' }),
		new CleanWebpackPlugin()
	]
};