
<details>
<summary><b>Babel Configuration:</b></summary>
<h6>.babelrc</h6>
<pre>
{
    "presets": [
        [
            "@babel/preset-env" ,
            {
                "useBuiltIns": "usage" ,
                "corejs": "3" ,
                "targets": {
                    "browsers": [
                        "> 1%" ,
                        "last 2 versions" ,
                        "not ie <= 8" ,
                    ]
                }
            }
        ]
    ]
}
</pre>
</details>

<details>
<summary><b>Npm Scripts:</b></summary>
<h6>inside package.json</h6>
<pre>
"scripts": {
    "start": "webpack-dev-server --config webpack.start.js --open",
    "dev": "webpack --config webpack.dev.js",
    "prod": "webpack --config webpack.prod.js"
}
</pre>

`npm start` - To start the dev server.<br>
`npm run dev` - Build the development version of project.<br>
`npm run prod` - Build the production version of project.

</details>
<details>
<summary><b>Webpack Config:</b></summary>
<h6>webpack.start.js</h6>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development' ,
    devtool: 'source-map' ,
    entry: { index: './src/js/index.js' } ,
    output: {
        filename: '[name].bundle.js' ,
        path: path.resolve(__dirname, 'dist') ,
    } ,
    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/ ,
                use: ['babel-loader'] 
            } ,
            {
                test: /\.scss$/ , 
                use: [
                    'style-loader' ,
                    { loader: 'css-loader' , options: { url: false, } } , 
                    'sass-loader' ,
                ] ,
            } ,
            {
                test: /\.html$/ ,
                use: ['html-loader'] ,
            } ,
            {
                test: /\.(jpeg|png|jpg|gif)$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: '[name].[ext]' , outputPath: 'assets/images' } ,
                } ,
            } ,
            {
                test: /\.svg$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: '[name].[ext]' , outputPath: 'assets/svg' } ,
                } ,
            } ,
            {
                test: /\.ico$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: 'favicon.ico' , outputPath: 'assets/favicon'} ,
                } ,
            } ,
        ]
    } ,
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html' ,
            template: path.resolve(__dirname, 'src', 'index.html') ,
            chunks: ['index'] ,
        }) ,
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
```
<h6>webpack.dev.js</h6>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development' ,
    devtool: 'source-map' ,
    entry: { index: './src/js/index.js' } ,
    output: {
        filename: '[name].bundle.js' ,
        path: path.resolve(__dirname, 'dist') ,
    } ,
    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/ ,
                use: ['babel-loader'] 
            } ,
            {
                test: /\.scss$/ , 
                use: [
                    MiniCssExtractPlugin.loader ,
                    { loader: 'css-loader' , options: { url: false, } } , 
                    'sass-loader' ,
                ] ,
            } ,
            {
                test: /\.html$/ ,
                use: ['html-loader'] ,
            } ,
            {
                test: /\.(jpeg|png|jpg|gif)$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: '[name].[ext]' , outputPath: 'assets/images' } ,
                } ,
            } ,
            {
                test: /\.svg$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: '[name].[ext]' , outputPath: 'assets/svg' } ,
                } ,
            } ,
            {
                test: /\.ico$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: 'favicon.ico' , outputPath: 'assets/favicon'} ,
                } ,
            } ,
        ]
    } ,
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html' ,
            template: path.resolve(__dirname, 'src', 'index.html') ,
            chunks: ['index'] ,
        }) ,
        new MiniCssExtractPlugin({ filename: 'style.css' }) ,
        new CleanWebpackPlugin() ,
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
```
<h6>webpack.prod.js</h6>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production' ,
    devtool: 'source-map' ,
    entry: { index: './src/js/index.js' } ,
    output: {
        filename: '[name].[contentHash].bundle.js' ,
        path: path.resolve(__dirname, 'dist') ,
    } ,
    module: {
        rules: [
            {
                test: /\.js$/ ,
                exclude: /node_modules/ ,
                use: ['babel-loader'] ,
            } ,
            {
                test: /\.scss$/ ,
                use: [
                    MiniCssExtractPlugin.loader ,
                    { loader: 'css-loader' , options: { url: false } } ,
                    'sass-loader' ,
                ]
            } ,
            {
                test: /\.html$/ ,
                use: ['html-loader'] ,
            } ,
            {
                test: /\.(jpeg|png|jpg|gif)$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: '[name].[ext]' , outputPath: 'assets/images' } ,
                } ,
            } ,
            {
                test: /\.svg$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: '[name].[ext]' , outputPath: 'assets/svg' } ,
                } ,
            } ,
            {
                test: /\.ico$/ ,
                use: {
                    loader: 'file-loader' ,
                    options: { name: 'favicon.ico' , outputPath: 'assets/favicon' } ,
                } ,
            } ,
        ]
    } ,
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html' ,
            template: path.resolve(__dirname, 'src', 'index.html') ,
            chunks: ['index'] ,
        }) ,
        new MiniCssExtractPlugin({ filename: 'style.[contentHash].css' }) ,
        new CleanWebpackPlugin() ,
    ] ,
    optimization: {
        minimizer: [ new OptimizeCssAssetsPlugin() , new TerserPlugin() ] ,
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
```
</details>
<details>
<summary><b>Webpack Config with multiple entry points:</b></summary>

###### File Structure:
```js
module.exports = {
    ...
    entry: { index: './src/js/index.js' , edit: './src/js/edit.js' } ,
    ...
    plugins: [
        new HtmlWebpackPlugin({ 
          filename: 'index.html',
          template: path.resolve(__dirname, 'src', 'index.html'),
          chunks: ['index']
        }),
        new HtmlWebpackPlugin({ 
          filename: 'edit.html',
          template: path.resolve(__dirname, 'src', 'edit.html'),
          chunks: ['edit']
        }) ,
        ...
    ] ,
    ...
}
```
</details>
