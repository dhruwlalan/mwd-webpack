const path = require('path');
const express = require('express');
const basic = require('./middlewares/basic');
const setSecurityHeaders = require('./middlewares/setSecurityHeaders');
const connectWebpack = require('./middlewares/connectWebpack');

/*Create Express App*/
const app = express();

/* ** Setup Security Middlewares ** */
setSecurityHeaders(app);
/* ** Hook webpack-dev-middleware with hot reload ***/
connectWebpack(app);
/* ** Use Basic Middlewares ** */
basic.setupTemplateEngin(app);
basic.serverStaticFiles(app);
basic.useParsers(app);
basic.gzipResponses(app);


/*Define Routes*/
app.get('/' , (req , res) => {
	res.status(200).render('index' , {
		title: 'Webpack Demo' ,
	});
});

module.exports = app;