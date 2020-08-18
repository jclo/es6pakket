// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(ES6Pakket, libname, version) {
  describe('Test ES6Pakket Library:', () => {
    describe('Test ES6Pakket.NAME and ES6Pakket.VERSION:', () => {
      it(`Expects ES6Pakket.NAME to return the string "${libname}".`, () => {
        expect(ES6Pakket.NAME).to.be.a('string').that.is.equal(libname);
      });

      it(`Expects ES6Pakket.VERSION to return the string "${version}".`, () => {
        expect(ES6Pakket.VERSION).to.be.a('string').that.is.equal(version);
      });
    });

    describe('Test ES6Pakket private methods:', () => {
      it('Expects ES6Pakket._setTestMode to be a function.', () => {
        expect(ES6Pakket).own.property('_setTestMode').that.is.a('function');
      });

      it('Expects ES6Pakket._setTestMode() to return an empty array.', () => {
        expect(ES6Pakket._setTestMode()).to.be.an('array').that.has.lengthOf(0);
      });
    });

    describe('Test the ES6Pakket mandatory public methods:', () => {
      // noConflict
      it('Expects ES6Pakket.noConflict to be a function.', () => {
        expect(ES6Pakket).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects ES6Pakket.noConflict() to return an object.', () => {
        expect(ES6Pakket.noConflict()).to.be.an('object');
      });

      // whoami
      it('Expects ES6Pakket.whoami to be a function.', () => {
        expect(ES6Pakket).to.own.property('whoami').that.is.a('function');
      });

      it('Expects ES6Pakket.whoami() to return an object.', () => {
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

    describe('Test the ES6Pakket specific public methods:', () => {
      it('Expects ES6Pakket to own the method "getString".', () => {
        expect(ES6Pakket).to.own.property('getString').that.is.a('function');
      });

      it('Expects ES6Pakket.getString() to return the string "I am a string!".', () => {
        expect(ES6Pakket.getString()).to.be.a('string').that.is.equal('I am a string!');
      });

      it('Expects ES6Pakket to own the method "getArray".', () => {
        expect(ES6Pakket).to.own.property('getArray').that.is.a('function');
      });

      it('Expects ES6Pakket.getArray() to return an array with 3 elements.', () => {
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
};
