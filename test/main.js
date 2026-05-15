// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
import testlib from './int/libprototypal.js';
import pack from '../package.json' with { type: 'json' };


// -- Local Constants
const libname = 'ES6Pakket';


// -- Local Variables


// -- Main

// This define root for Node.js:
global.root = {};

// Nota:
// If you want that 'display-coverage' shows the coverage files by files,
// you should set 'ES6Pakket' and 'testlib' like this:
//  . const ES6Pakket = require('../src/<file>').default;
//  . testlib(ES6Pakket, '{{lib:name}}', '{{lib:version}}', 'without new');
//
// But, if you want that 'display-coverage' shows the coverage in one file,
// you should set 'ES6Pakket' and 'testlib' like this:
//  . import ES6Pakket from '../index.js';
//  . testlib(ES6Pakket, libname, pack.version, 'without new');

const ES6Pakket = (await import('../src/prototypal.js')).default;
// const ES6Pakket (await import('../index.js')).default;

describe('Test ES6Pakket:', () => {
  testlib(ES6Pakket, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(ES6Pakket, libname, pack.version, 'without new');
});


// - oOo --
