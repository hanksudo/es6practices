# ECMAScript 6 Practices

## Install Babel
``` bash
npm install -g babel
```

## Basic Babel usage
``` bash
# compile and output to stdout
babel src/app.js

# compile and output to a file
babel src/app.js -o dist/app.js

# compile when file change
babel src/app.js -w -o dist/app.js

# evaluate code
babel-node -e "console.log('Hello, 世界！');"

# compile and run
babel-node src/app.js
```

## Use Gulp to auto compile
``` bash
# install local packages
npm i
# watch & run
gulp
```

## Compared source and compiled script

``` bash
opendiff src/app.js dist/app.js
```

## Reference

- [Babel · The compiler for writing next generation JavaScript](https://babeljs.io/)
- [lukehoban/es6features · GitHub](https://github.com/lukehoban/es6features)
- [Learn ES6 NOW!](http://learnharmony.org/)
- [function* - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [Arrow functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [ECMAScript 6入门](http://es6.ruanyifeng.com/)
