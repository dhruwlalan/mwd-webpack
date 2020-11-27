require('dotenv').config();
const path = require('path');
const express = require('express');const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../configs/webpack.dev.js');
const app = require('./app.js');

const compiler = webpack(config);
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(
  webpackHotMiddleware(compiler)
);

/*Serve Static Files*/
app.use( express.static(path.join(__dirname , '../public')) );

/*Start Server*/
const server = app.listen(process.env.PORT || 8000 , () => {
	console.log('Server is listening on port 8000..');
});