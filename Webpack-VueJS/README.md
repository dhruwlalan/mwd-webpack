### Required Packages:
<pre>
v2.6.12  <b>vue</b>
v15.9.3  <b>vue-loader</b>
v2.6.12  <b>vue-template-compiler</b>
</pre>

### Installation:
<pre>
$ npm i vue
$ npm i -D vue-loader vue-template-compiler
</pre>

<hr>

### Webpack Configs:

<details>
<summary>webpack.start.js</summary>
<br>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development' ,
    devtool: '#eval-source-map' ,
    entry: { index: './src/js/index.js' } ,
    output: {
        filename: '[name].bundle.js' ,
        path: path.resolve(__dirname, 'dist') ,
    } ,
    module: {
        rules: [
            {
                test: /\.vue$/ ,
                loader: 'vue-loader' ,
            } ,
            {
                test: /\.js$/ ,
                exclude: /node_modules/ ,
                use: ['babel-loader'] ,
            } ,
            {
                test: /\.scss$/ ,
                use: [
                    'style-loader' ,
                    { loader: 'css-loader' , options: { url: false } } ,
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
                    options: { name: '[name].[ext]' , esModule: false , outputPath: 'assets/images' } ,
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
        new VueLoaderPlugin() ,
    ] ,
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/ ,
                    name: 'vendor' ,
                    chunks: 'all' ,
                    enforce: true ,
                } ,
            }
        }
    } ,
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' ,
        } ,
        extensions: ['*', '.js', '.vue', '.json'] ,
    } ,
    devServer: {
        historyApiFallback: true ,
        noInfo: true ,
        overlay: true ,
    } ,
    performance: {
        hints: false ,
    } ,
};
```
</details>

<details>
<summary>webpack.dev.js</summary>
<br>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

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
                test: /\.vue$/ ,
                loader: 'vue-loader' ,
            } ,
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
                    options: { name: '[name].[ext]' , esModule: false , outputPath: 'assets/images' } ,
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
        new MiniCssExtractPlugin({ filename: 'style.css' }) ,
        new CleanWebpackPlugin() ,
        new VueLoaderPlugin() ,
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
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' ,
        } ,
        extensions: ['*', '.js', '.vue', '.json'] ,
    } ,
    devServer: {
        historyApiFallback: true ,
        noInfo: true ,
        overlay: true ,
    } ,
    performance: {
        hints: false ,
    } ,
};
```
</details>

<details>
<summary>webpack.prod.js</summary>
<br>

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

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
                test: /\.vue$/ ,
                loader: 'vue-loader' ,
            } ,
            {
                test: /\.js$/ ,
                exclude: /node_modules/ ,
                use: ['babel-loader'] ,
            } ,
            {
                test: /\.scss$/ ,
                use: [
                    MiniCssExtractPlugin.loader ,
                    { loader: 'css-loader', options: { url: false } } ,
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
                    options: { name: '[name].[ext]' , esModule: false , outputPath: 'assets/images' } ,
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
        new VueLoaderPlugin() ,
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
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' ,
        } ,
        extensions: ['*', '.js', '.vue', '.json'] ,
    } ,
    performance: {
        hints: 'warning' ,
    } ,
};
```
</details>

---

### Complete Base Project Structure:
<pre>
src
├── assets
│   ├── favicon
│   │   └── <i>favicon.ico</i>
│   ├── images
│   └── svg
│
├── js
│   ├── assets
│   │   └── <i>assets.js</i>
│   ├── components
│   ├── <i>App.vue</i>
│   └── <i>index.js</i>
│
├── sass
│   ├── abstracts
│   │   ├── <i>_mixins.scss</i>
│   │   └── <i>_variables.scss</i>
│   ├── base
│   │   ├── <i>_base.scss</i>
│   │   └── <i>_reset.scss</i>
│   ├── components
│   ├── layout
│   └── <i>main.scss</i>
│
└── <i>index.html</i>
</pre>
