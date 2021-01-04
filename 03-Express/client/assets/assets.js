///SASS///
import '../sass/main.scss';

///ASSETS///
import './favicon/favicon.ico';
import './images/webpack.png';
import './svg/greet.svg';

///HMR///
if (process.env.NODE_ENV === 'development') {
   require('webpack-hot-middleware/client?reload=true&noInfo=true');
}
