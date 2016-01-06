# ECMAScript 2015 (ES6) Practices

## Requirements

- node (https://nodejs.org)
- babel (https://babeljs.io)

## Install Babel

```bash
npm install -g babel-cli
```

## Basic Babel usage

```bash
# compile and output to stdout
babel src/app.js

# compile and output to a file
babel src/app.js -o dist/app.js

# compile when file change
babel src/app.js -w -o dist/app.js

# evaluate code
node -e "console.log('Hello, 世界！');"

# compile and run
node --use_strict src/app.js
```

## Compile to ES5

```bash
npm install babel-preset-es2015 --save-dev
babel src/app.js --presets es2015
```

or simply add the following line to your `.babelrc` file:

```
{
  "presets": ["es2015"]
}
```

## Use Gulp to watch & compile

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
- [Learn ES2015 (ES6) NOW!](http://learnharmony.org/)
- [ECMAScript 6入门](http://es6.ruanyifeng.com/)
- [function* - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
- [Arrow functions - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
