# ES6Pakket

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Travis CI][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependencies status][dependencies-image]][dependencies-url]
[![Dev Dependencies status][devdependencies-image]][devdependencies-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)


ES6Pakket is a boilerplate for writing ES6 Javascript libraries that run on both Node.js and ECMAScript 2015 (ES6) compliant browsers.

The build doesn't require a transpiler (like babel) or a builder (like browserify, webpack or rollup) to produce a module that runs in the browser from source files that use `import` and `export` statements. It is useful if you want to keep your source code quite pure.

ES6Pakket relies on `Pakket` to drastically reduces the amount of extra code added to your library (go to [Pakket](https://www.npmjs.com/package/pakket) for details).

ES6Pakket relies on [Mocha](https://mochajs.org) and [Chai](http://chaijs.com) for unitary testing. It relies on [Istanbul](https://gotwarlost.github.io/istanbul/) for code coverage.

ES6Pakket uses [Travis CI](https://travis-ci.com) for continuous integration and [Coveralls.io](https://coveralls.io) to display test coverage.

Nota:  
`ES6Pakket` is a fork of the boilerplate [ES6Kadoo](https://www.npmjs.com/package/@mobilabs/kadoo).



## Quick Startup

You can easily get your first ES6Pakket library running in a couple of minutes by just typing a few command lines. But first, you need to create an empty folder. It will contain your library.

Then, you just need to create a `package.json` file that contains:

```json
{
  "name": "NameOfYourProject",
  "scripts": {
    "create": "npm install @mobilabs/es6pakket && npm run populate",
    "populate": "es6pakket populate --name ${npm_package_name} --author \"${npm_package_writer_name}\" --acronym ${npm_package_writer_acronym} --email ${npm_package_writer_email} --url ${npm_package_writer_url} && npm install && npm run build && npm run test && npm run report"
  },
  "writer": {
    "name": "John Doe",
    "acronym": "jdo",
    "email": "jdo@johndoe.com",
    "url": "http://www.johndoe.com/"
  }
}
```
Replace `NameOfYourProject` by your project name and fill `writer` with your credentials.

And finally, type in the terminal:

```bash
npm run create.
```

That's almost all! When the script has been executed, your folder contains the following files:

```bash
Your project Folder
      |_ lib
      |   |_ lib.js           // Your built ES6 module,
      |_ src
      |   |_ ...               // The source files of your library,
      |   |_ ...
      |   |_ ...
      |_ tasks
      |   |_ ...              // The Gulp tasks to build your project,
      |_  test
      |     |_ main.js        // Your Mocha, Chai test file,
      |_ .eslintignore        // Files to be ignored by ESLint,
      |_ .eslintrc            // A Configuration file for the ESLint linter tool (if you use it),
      |_ .gitignore           // Files that Git must ignore (if you use git),
      |_ .travis.yml          // A configuration file for Travis CI (if you use it),
      |_ .CHANGELOG.md        // The changes between your different versions,
      |_ .gulpfile.js         // The main Gulp task,
      |_ index.js             // The link to your ES5 library,
      |_ LICENSE.md           // The license that applies to your library (here MIT),
      |_ package-lock.json    // The NPM dependency tree,
      |_ package.json         // The NPM package file,
      |_ README.md            // Your README file,
```

This folder is now a NPM package.


## How to build it

The file `gulpfile.js` contains the build instructions. These instructions populate the folder `lib` from the sources files included in the folder `src`.

`gulpfile.js` implements two operations for the build:
  * the command `npm run build` creates the library at the execution,
  * and the command `npm run watch` updates the library when one of the source files is modified.


## How to test it

Your `package.json` file contains three scripts to test your UMD library:

  * `npm run test`,
  * `npm run check-coverage`,
  * `npm run display-coverage`.

`npm run test` executes the tests and computes the test coverage.

`npm run check-coverage` checks if the test coverage matches the requirements. Here 100%.

`npm run display-coverage` opens your browser and reports the test coverage.


## How to create a distribution version

Your `package.json` file contains a script to build a distribution library:

  * `npm run makedist`

The script `makedist` adds a license header to the library and creates a minified version.


## How to use it

On Node.js, your project folder is viewed as a NPM package. Choose a working directory outside your project folder, create a folder `node_modules` and copy your project folder into `node_modules`. Then, on your terminal, type (at your working directory level):

```js
node
> var mylib = require('mylib');
undefined
> mylib.getString();
'I am a string!'
> mylib.getArray();
[ '1', '2', '3' ]
>
```

On the browser, pick-up the JS file `lib/mylib.js` and add it as a script in your HTML file. `mylib` is an immediately-invoked function expression. It attaches the `mylib` variable to the current context.

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="mylib.js"></script>
    <script>
    	console.log(mylib.VERSION);
    </script>
  </body>
</html>
```

Or,

```html
<!DOCTYPE html>
<html>
  <body>
    <script type="module">
      import mylib from './<path_to_the_lib>/mylib.mjs';

      console.log(mylib.VERSION);
    </script>
  </body>
</html>
```

Enjoy!

## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/es6pakket.svg?style=flat-square
[release-image]: https://img.shields.io/github/release/jclo/es6pakket.svg?include_prereleases&style=flat-square
[commit-image]: https://img.shields.io/github/last-commit/jclo/es6pakket.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/jclo/es6pakket.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/jclo/es6pakket/master.svg?style=flat-square
[dependencies-image]: https://david-dm.org/jclo/es6pakket/status.svg?theme=shields.io
[devdependencies-image]: https://david-dm.org/jclo/es6pakket/dev-status.svg?theme=shields.io
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/es6pakket.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/@mobilabs/es6pakket.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/@mobilabs/es6pakket
[release-url]: https://github.com/jclo/es6pakket/tags
[commit-url]: https://github.com/jclo/es6pakket/commits/master
[travis-url]: https://travis-ci.com/jclo/es6pakket
[coveralls-url]: https://coveralls.io/github/jclo/es6pakket?branch=master
[dependencies-url]: https://david-dm.org/jclo/es6pakket
[devdependencies-url]: https://david-dm.org/jclo/es6pakket?type=dev
[license-url]: http://opensource.org/licenses/MIT
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/es6pakket
