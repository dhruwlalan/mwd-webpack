/*SASS*/
import '../sass/main.scss';

/*ASSETS*/
import '../assets/favicon/favicon.ico';
import '../assets/images/webpack.png';
import '../assets/svg/greet.svg';

/*HMR*/
if (process.env.NODE_ENV === 'development') {
   require('webpack-hot-middleware/client?reload=true&noInfo=true');
}
