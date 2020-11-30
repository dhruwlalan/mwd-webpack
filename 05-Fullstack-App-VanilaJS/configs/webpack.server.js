const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    name: 'server' ,
    target: 'node' ,
    mode: 'production' ,
    entry: {
        server: path.resolve(__dirname, '../server/server.js') ,
    },
    output: {
        filename: '[name].bundle.js' ,
        path: path.resolve(__dirname, '../build') ,
    } ,
    externals: [ nodeExternals() ] ,
    node: {
        __filename: false ,
        __dirname: false ,
    } ,
    plugins: [
        new CleanWebpackPlugin() ,
    ] ,
};