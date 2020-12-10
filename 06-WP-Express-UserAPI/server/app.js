const express = require('express');
const basic = require('./middlewares/basic');
const setSecurityHeaders = require('./middlewares/setSecurityHeaders');
const connectWebpack = require('./middlewares/connectWebpack');
const errorController = require('./controllers/errorController');
const userRouter = require('./routes/userRoutes');

///Create Express App///
const app = express();

///Setup Security Middleware///
setSecurityHeaders(app);

///Hook webpack-dev-middleware with hot-reload///
connectWebpack(app);

///Use Basic Middleware///
basic.setupTemplateEngin(app);
basic.serverStaticFiles(app);
basic.useParsers(app);
basic.gzipResponses(app);

///Define Routes///
app.use('/api/users', userRouter);
app.get('/', (_req, res) => {
   res.status(200).render('index', {
      msg: 'Hello, World!!',
   });
});

///Handle Undefined Routes///
app.all('*', (req, res) => {
   res.status(404).json({
      status: '404',
      unknownRoute: req.originalUrl,
   });
});

///Global Error Handler Middleware, executed when passed argument inside next()///
app.use(errorController);

module.exports = app;
