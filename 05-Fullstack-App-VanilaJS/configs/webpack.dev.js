const path = require('path');
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development' ,
	entry: {
		index: path.resolve(__dirname, '../client/js/index.js') ,
	} ,
	output: {
		filename: '[name].bundle.js' ,
		path: path.resolve(__dirname, '../public') ,
	} ,
	devServer: {
		contentBase: '../public' ,
		overlay: true ,
		inline: true ,
	    hot: true ,
	} ,
	stats: {
		assets: true ,
		modules: false ,
	    builtAt: false ,
	    version: false ,
	    timings: false ,
	    entrypoints: false ,
	    colors: true ,
	    hash: false ,
	} ,
	module: {
		rules: [
			{
				test: /\.html$/ ,
				use: ['html-loader'] ,
			} ,
			{
				test: /\.css$/ ,
				use: [
					'style-loader',
					{ loader: 'css-loader' , options: { url: false, } } ,
				] ,
			} ,
			{
				test: /\.scss$/ ,
				use: [
					'style-loader',
					{ loader: 'css-loader' , options: { url: false, } } ,
					'sass-loader' ,
				] ,
			} ,
			{
				test: /\.js$/ ,
				exclude: /node_modules/ ,
				use: ['babel-loader'] ,
			} ,
			{
				test: /\.ico$/ ,
				use: {
					loader: 'file-loader' ,
					options: { name: 'favicon.ico' , outputPath: 'assets/favicon'} ,
				} ,
			} ,
			{
				test: /\.svg$/ ,
				use: {
					loader: 'file-loader' ,
					options: { name: '[name].[ext]' , esModule: false , outputPath: 'assets/svg' } ,
				} ,
			} ,
			{
				test: /\.(jpeg|png|jpg|gif)$/ ,
				use: {
					loader: 'file-loader' ,
					options: { name: '[name].[ext]' , esModule: false , outputPath: 'assets/images' } ,
				} ,
			} ,
			{
				test: /\.(ttf|woff|woff2)$/ ,
				use: {
					loader: 'file-loader' ,
					options: { name: '[name].[ext]' , esModule: false , outputPath: 'assets/fonts' } ,
				} ,
			} ,
		]
	} ,
	plugins: [
		new MiniCssExtractPlugin({ filename: 'style.css' }) ,
		new webpack.HotModuleReplacementPlugin() ,
	] ,
	optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/ ,
                    name: 'vendor' ,
                    chunks: 'all' ,
                    enforce: true ,
                }
            }
        }
    } ,
};