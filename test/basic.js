// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules
const ES6Pakket = require('../index')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
describe('Test ES6Pakket:', () => {
  // Test the lib:
  describe('Test ES6Pakket.VERSION and ES6Pakket.noConflict:', () => {
    it('Expects ES6Pakket.VERSION to return a string.', () => {
      expect(ES6Pakket.VERSION).to.be.a('string');
    });
    it('Expects ES6Pakket.noConflict to return a function.', () => {
      expect(ES6Pakket.noConflict).to.be.a('function');
    });
  });

  describe('Test the ES6Pakket methods:', () => {
    //
    it('Expects ES6Pakket to own the method "getString".', () => {
      expect(ES6Pakket.getString).to.be.a('function');
    });

    it('Expects ES6Pakket.getString() to return the string "I am a string!".', () => {
      expect(ES6Pakket.getString()).to.be.a('string').that.is.equal('I am a string!');
    });

    it('Expects ES6Pakket to own the method "getArray".', () => {
      expect(ES6Pakket.getArray).to.be.a('function');
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
