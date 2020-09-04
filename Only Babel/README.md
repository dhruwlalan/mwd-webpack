# Using Babel Standalone

### Required Packages:

<pre>
v7.11.1  <b>@babel/core</b>
v7.11.0  <b>@babel/preset-env</b>
v7.10.5  <b>@babel/cli</b>
v3.06.5  <b>core-js</b>
v0.13.7  <b>regenerator-runtime</b>
</pre>

### Installation:

<pre>
$ npm i -D  @babel/core  @babel/preset-env  @babel/cli  core-js  regenerator-runtime
</pre>

### .babelrc

```
{
    "presets": [
        [
            "@babel/preset-env" ,
            {
                "useBuiltIns": "usage" ,
                "corejs": "3" ,
                "targets": {
                    "browsers": [
                        "> 1%" ,
                        "last 2 versions" ,
                        "not ie <= 8" ,
                    ]
                }
            }
        ]
    ]
}
```

### Run

- directly using npx

<pre>
$ npx babel input.js -o output2.js
</pre>

- by creating npm script

<pre>
"scripts": {
    "build": "babel input.js -o output.js"
},
</pre>

<pre>
$ npm run build
</pre>
