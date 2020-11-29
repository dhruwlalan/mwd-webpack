/*SASS*/
import '../sass/main.scss';

/*HMR*/
if (process.env.NODE_ENV === 'development') {
	require("webpack-hot-middleware/client?reload=true&noInfo=true");
}

/*ASSETS*/
import '../assets/favicon/favicon.ico';
import '../assets/images/webpack.png';
import '../assets/svg/greet.svg';