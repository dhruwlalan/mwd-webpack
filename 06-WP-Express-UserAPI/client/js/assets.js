///SASS///
import '../sass/main.scss';
///ASSETS///
import '../assets/favicon/favicon.ico';

///HMR///
if (process.env.NODE_ENV === 'development') {
   require('webpack-hot-middleware/client?reload=true&noInfo=true');
}
