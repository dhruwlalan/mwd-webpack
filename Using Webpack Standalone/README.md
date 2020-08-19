# Using Webpack Standalone

### Required Packages:

<pre>
v4.44.1  <b>webpack</b>
v3.3.12  <b>webpack-cli</b>
</pre>

### Installation:

<pre>
$ npm i -D  webpack  webpack-cli
</pre>

### webpack.config.js

```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js' ,
    output: {
        filename: 'bundle.js' ,
        path: path.resolve( __dirname , 'dist')
    }
}
```

### Run

- directly using npx

<pre>
$ npx webpack --config webpack.config.js
</pre>

- by creating npm scripts

<pre>
"scripts": {
    "dev": "webpack --config webpack.config.js --mode development",
    "prod": "webpack --config webpack.config.js --mode production"
}
</pre>

<pre>
$ npm run dev       // for development
$ npm run prod      // for production
</pre>
