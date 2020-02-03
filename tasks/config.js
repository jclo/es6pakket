/* eslint one-var: 0, semi-style: 0 */


// -- Vendor modules


// -- Local modules
const pack = require('../package.json');


// -- Local constants
const libname     = 'ES6Pakket'
    , source      = './src/prototypal.js'
    , exportname  = 'ES6Pakket'
    ;


// -- Local variables


// -- Main

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname,
  // This is the entry javascript file of your library. Choose one
  // pattern among these ones. he files 'basic.js', 'functional.js',
  // 'functional-shared.js', 'prototypal.js', 'pseudoclassical.js' and
  // 'pseudoclassical-auto.js' are mutually exclusives.
  source,
  export: exportname,
  index: './index.js',
  distlink: `./lib/${libname}.js`,

  /* eslint-enable no-multi-spaces */
  get license() {
    return ['/*! ****************************************************************************',
      ` * ${libname} v${pack.version}`,
      ' *',
      ` * ${pack.description}.`,
      ' * (you can download it from npm or github repositories)',
      ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
      ' * Released under the MIT license. You may obtain a copy of the License',
      ' * at: http://www.opensource.org/licenses/mit-license.php).',
      ' * Built from {{boiler:name}} v{{es6pakket:version}}.',
      ' * ************************************************************************** */',
      ''].join('\n');
  },
};
