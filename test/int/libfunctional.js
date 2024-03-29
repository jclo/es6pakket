// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of owned custom properties added by your library,
// number of owned and inherited properties added by your library (instance),
// number of items returned by '_setTestMode'.
const LIBPROPS = 0
    , OWNPROPS = 2
    // , INHPROPS = 0
    , TESTMODE = 0
    ;


// -- Local Variables


// -- Main
module.exports = function(ES6Pakket, libname, version) {
  describe('ES6Pakket introspection:', () => {
    describe('Test the nature of ES6Pakket:', () => {
      it('Expects ES6Pakket to be a function.', () => {
        expect(ES6Pakket).to.be.a('function');
      });

      it(`Expects ES6Pakket to own ${4 + LIBPROPS} custom properties.`, () => {
        expect(Object.keys(ES6Pakket)).to.be.an('array').that.has.lengthOf(4 + LIBPROPS);
      });


      // -- This section must not be modified --
      // NAME, VERSION, _setTestMode, noConflict
      describe('Check the owned generic custom properties:', () => {
        it(`Expects ES6Pakket to own the property "NAME" whose value is "${libname}".`, () => {
          expect(ES6Pakket).to.own.property('NAME').that.is.equal(libname);
        });

        it(`Expects ES6Pakket to own the property "VERSION" whose value is "${version}".`, () => {
          expect(ES6Pakket).to.own.property('VERSION');
        });

        it('Expects ES6Pakket to own the property "_setTestMode" that is a function.', () => {
          expect(ES6Pakket).to.own.property('_setTestMode').that.is.a('function');
        });

        it('Expects ES6Pakket to own the property "noConflict" that is a function.', () => {
          expect(ES6Pakket).to.own.property('noConflict').that.is.a('function');
        });

        describe('Test the owned generic custom properties:', () => {
          it(`Expects the property "_setTestMode" to return an array with ${TESTMODE} item(s).`, () => {
            expect(ES6Pakket._setTestMode()).to.be.an('array').that.has.lengthOf(TESTMODE);
          });

          it('Expects the property "noConflict" to return a function.', () => {
            expect(ES6Pakket.noConflict()).to.be.a('function');
          });
        });
      });


      // -- This section must not be adapted --
      // Add here the owned properties added by your library.
      describe('Check the owned specific custom properties:', () => {
        it('Expects ES6Pakket to own the property ... to be completed or ... removed!', () => {
          expect(true).to.be.equal(true);
        });

        describe('Test the owned specific custom properties:', () => {
          it('Expects ES6Pakket the property ... to be completed or ... removed!', () => {
            expect(true).to.be.equal(true);
          });
        });
      });
    });


    describe('Test ES6Pakket constructor:', () => {
      const o = ES6Pakket();
      const op = Object.getOwnPropertyNames(o);
      // const io = Object.keys(Object.getPrototypeOf(o));

      it('Expects the function ES6Pakket to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it(`Expects ES6Pakket object to own ${2 + OWNPROPS} properties.`, () => {
        expect(op).to.be.an('array').that.has.lengthOf(2 + OWNPROPS);
      });


      // -- This section must not be modified --
      // _library, whoami
      describe('Check the owned generic properties:', () => {
        it('Expects ES6Pakket object to own the property "_library" that is an object.', () => {
          expect(o).to.own.property('_library').that.is.an('object');
        });

        it('Expects ES6Pakket object to own the property "whoami" that is a function.', () => {
          expect(o).to.own.property('whoami').that.is.a('function');
        });

        describe('Test the owned generic properties:', () => {
          it('Expects the property "_library" to own two properties.', () => {
            expect(Object.keys(o._library)).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
            expect(o._library).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
            expect(o._library).to.own.property('version').that.is.equal(version);
          });

          it('Expects the property "whoami" to return an object.', () => {
            expect(o.whoami()).to.be.an('object');
          });
          it('Expects this object to own two properties.', () => {
            expect(Object.keys(o.whoami())).to.be.an('array').that.has.lengthOf(2);
          });
          it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
            expect(o.whoami()).to.own.property('name').that.is.equal(libname);
          });
          it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
            expect(o.whoami()).to.own.property('version').that.is.equal(version);
          });
        });


        // -- This section must be adapted --
        // Replace here 'getString' and 'getArray' by the inherited properties
        // added by your library.
        describe('Check the owned specific properties:', () => {
          it('Expects ES6Pakket object to own the property "getString" that is a function.', () => {
            expect(o).to.own.property('getString').that.is.a('function');
          });

          it('Expects ES6Pakket object to own the property "getArray" that is a function.', () => {
            expect(o).to.own.property('getArray').that.is.a('function');
          });

          describe('Test the owned specific properties:', () => {
            it('Expects the property "getString" to return the string "I am a string!".', () => {
              expect(o.getString()).to.be.a('string').that.is.equal('I am a string!');
            });

            it('Expects the property "getArray" to return an array with 3 elements.', () => {
              expect(o.getArray()).to.be.an('array').that.has.lengthOf(3);
            });
            it('Expects the first element to be equal to 1.', () => {
              expect(o.getArray()[0]).to.be.a('number').that.is.equal(1);
            });

            it('Expects the second element to be equal to 2.', () => {
              expect(o.getArray()[1]).to.be.a('number').that.is.equal(2);
            });

            it('Expects the third element to be equal to 3.', () => {
              expect(o.getArray()[2]).to.be.a('number').that.is.equal(3);
            });
          });
        });
      });
    });
  });
};


// - oOo --
