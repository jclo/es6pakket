// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of properties added by your library.
const OWNPROPS = 2
    , TESTMODE = 0
    ;


// -- Local Variables


// -- Main
module.exports = function(ES6Pakket, libname, version) {
  describe('ES6Pakket introspection:', () => {
    describe('Test the nature of ES6Pakket:', () => {
      it('Expects ES6Pakket to be an object.', () => {
        expect(ES6Pakket).to.be.an('object');
      });

      it(`Expects ES6Pakket to own ${6 + OWNPROPS} properties.`, () => {
        expect(Object.keys(ES6Pakket)).to.be.an('array').that.has.lengthOf(6 + OWNPROPS);
      });
    });


    // -- This section must not be modified --
    // NAME, VERSION, _library, _setTestMode, noConflict, whoami
    describe('Check the owned generic properties:', () => {
      it(`Expects ES6Pakket to own the property "NAME" whose value is "${libname}".`, () => {
        expect(ES6Pakket).to.own.property('NAME').that.is.equal(libname);
      });

      it(`Expects ES6Pakket to own the property "VERSION" whose value is "${version}".`, () => {
        expect(ES6Pakket).to.own.property('VERSION');
      });

      it('Expects ES6Pakket to own the property "_library" that is an object.', () => {
        expect(ES6Pakket).to.own.property('_library').that.is.an('object');
      });

      it('Expects ES6Pakket to own the property "_setTestMode" that is a function.', () => {
        expect(ES6Pakket).to.own.property('_setTestMode').that.is.a('function');
      });

      it('Expects ES6Pakket to own the property "noConflict" that is a function.', () => {
        expect(ES6Pakket).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects ES6Pakket to own the property "whoami" that is a function.', () => {
        expect(ES6Pakket).to.own.property('whoami').that.is.a('function');
      });

      describe('Test the owned generic properties:', () => {
        it('Expects the property "_library" to own two properties.', () => {
          expect(Object.keys(ES6Pakket._library)).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
          expect(ES6Pakket._library).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
          expect(ES6Pakket._library).to.own.property('version').that.is.equal(version);
        });

        it(`Expects the property "_setTestMode" to return an array with ${TESTMODE} item(s).`, () => {
          expect(ES6Pakket._setTestMode()).to.be.an('array').that.has.lengthOf(TESTMODE);
        });

        it('Expects the property "noConflict" to return an object.', () => {
          expect(ES6Pakket.noConflict()).to.be.an('object');
        });

        it('Expects the property "whoami" to return an object.', () => {
          expect(ES6Pakket.whoami()).to.be.an('object');
        });
        it('Expects this object to own two properties.', () => {
          expect(Object.keys(ES6Pakket.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
          expect(ES6Pakket.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
          expect(ES6Pakket.whoami()).to.own.property('version').that.is.equal(version);
        });
      });
    });


    // -- This section must be adapted --
    // Replace here 'getString' and 'getArray' by the inherited properties
    // added by your library.
    describe('Check the owned specific properties:', () => {
      it('Expects ES6Pakket to own the property "getString" that is a function.', () => {
        expect(ES6Pakket).to.own.property('getString').that.is.a('function');
      });

      it('Expects ES6Pakket to own the property "getArray" that is a function.', () => {
        expect(ES6Pakket).to.own.property('getArray').that.is.a('function');
      });

      describe('Test the owned specific properties:', () => {
        it('Expects the property "getString" to return the string "I am a string!".', () => {
          expect(ES6Pakket.getString()).to.be.a('string').that.is.equal('I am a string!');
        });

        it('Expects the property "getArray" to return an array with 3 elements.', () => {
          expect(ES6Pakket.getArray()).to.be.an('array').that.has.lengthOf(3);
        });
        it('Expects the first element to be equal to 1.', () => {
          expect(ES6Pakket.getArray()[0]).to.be.a('number').that.is.equal(1);
        });

        it('Expects the second element to be equal to 2.', () => {
          expect(ES6Pakket.getArray()[1]).to.be.a('number').that.is.equal(2);
        });

        it('Expects the third element to be equal to 3.', () => {
          expect(ES6Pakket.getArray()[2]).to.be.a('number').that.is.equal(3);
        });
      });
    });
  });
};
