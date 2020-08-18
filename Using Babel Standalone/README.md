# Using Babel Standalone

### Installation:

```
$ npm i -D  @babel/core  @babel/preset-env  @babel/cli  core-js  regenerator-runtime
```

### .babelrc

```
{
    "presets": [
        [
            "@babel/preset-env", 
            {
                "useBuiltIns": "usage",
                "corejs": "3",
                "targets": {
                    "browsers": [
                        "last 5 versions",
                    ]
                }
            }
        ]
    ]
}
```

### Run

```
$ npx babel input.js -o output2.js
```
