const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production' ,
	entry: {
		index: './src/js/index.js'
	} ,
	output: {
		filename: '[name].[contentHash].bundle.js' ,
		path: path.resolve(__dirname, 'dist')
	} ,
	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] } ,
			{ test: /\.scss$/ , use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] } ,
			{ test: /\.html$/ , use: ['html-loader'] } , 
			{ 
				test: /\.(jpeg|png|jpg|gif)$/ , 
				use: {
					loader: 'file-loader' , 
					options: { 
						name: '[name].[ext]' , 
						outputPath: 'assets/images'
					}
				}
			} ,
			{ 
				test: /\.svg$/ , 
				use: {
					loader: 'file-loader' , 
					options: { 
						name: '[name].[ext]' , 
						outputPath: 'assets/svg'
					}
				}
			} ,
		]
	} ,
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }) ,
		new MiniCssExtractPlugin({ filename: 'style.[contentHash].css' }) ,
		new CleanWebpackPlugin()
	] ,
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin() ,
			new TerserPlugin()
		]
	} 
};