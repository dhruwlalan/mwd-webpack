const path = require('path');
const fs = require('fs');
const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');


/*Create Express App*/
const app = express();

/*Hook webpack-dev-middleware with hot reload*/
if (process.env.FENV === 'development') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const config = require('../configs/webpack.start.js');
	const compiler = webpack(config);
	app.use(webpackDevMiddleware(compiler));
	app.use(webpackHotMiddleware(compiler));
}
/*Inject Bundles */
if (process.env.FENV === 'production') {
	let bundle = {};
	const publicDir = path.join(__dirname, '../public');
	fs.readdir(publicDir , async (err , files) => {
		if (err) return console.log('Unable to scan directory: ' + err);
		let assetsName = await files.map((file) => file.split('.')[0]);
		await files.forEach((file , i) => {
			bundle = Object.defineProperty(bundle, assetsName[i] , {
				value: files[i] ,
				writable: true ,
			    enumerable: true ,
			});
		});
	});
	app.use((req, res, next) => {
		res.locals.bundle = bundle
		next();
	});
}

/*Setup Template Engine*/
app.set('view engine' , 'pug');
app.set('views' , path.join(__dirname , '../views'));

/*Serve Static Files*/
app.use( express.static(path.join(__dirname , '../public')) );

/*Use the BodyParser & CookieParser*/
app.use( express.json({ limit: '10kb' }) );
app.use( cookieParser() );

/*G-Zip Responses*/
app.use( compression() );

/* ** Setup Security Middlewares ** */
	// 1 trust x-forworded-for header attribute
	app.enable('trust proxy');
	// 2 enable cross-origin resource sharing
	app.use(cors());
	app.options('*' , cors());
	// 3 setup some security http headers
	app.use(helmet());
	app.use(helmet.contentSecurityPolicy({
		directives: {
			defaultSrc: ["'self'", 'https:', 'http:', 'data:', 'ws:'],
			baseUri: ["'self'"],
			fontSrc: ["'self'", 'https:', 'http:', 'data:'],
			scriptSrc: ["'self' 'unsafe-eval'", 'https:', 'http:', 'blob:'],
			styleSrc: ["'self'", "'unsafe-inline'", 'https:', 'http:'],
		},
	}));

/*Define Routes*/
app.get('/' , (req , res) => {
	res.status(200).render('index' , {
		title: 'Webpack Demo' ,
	});
});

module.exports = app;