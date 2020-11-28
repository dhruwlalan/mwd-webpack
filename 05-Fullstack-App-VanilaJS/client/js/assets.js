import '../sass/main.scss';

import '../assets/favicon/favicon.ico';
import '../assets/images/webpack.png';
import '../assets/svg/greet.svg';

if (process.env.NODE_ENV === 'development') {
	require("webpack-hot-middleware/client?reload=true&noInfo=true");
}