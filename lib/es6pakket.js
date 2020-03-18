/* global define */
/* eslint no-shadow: ['error', { 'allow': ['root'] }] */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.ES6Pakket = factory(root);
  }
/* eslint-disable-next-line */
}(this,(root)=>{"use strict";return function(){/* istanbul ignore next */function e(t,n,o){function r(f){function i(e){const n=t[f][2][e];return r(n||e)}if(!n[f]){if(!t[f]){throw new Error(`Cannot find module "${f}"`)}n[f]={exports:{}};const r=n[f];t[f][1].call(r.exports,i,r,r.exports,e,t,n,o)}return n[f].exports}for(let e=0;e<o.length;e++){r(o[e])}return r}return e}()({

  /* eslint-disable-next-line no-unused-vars */
  1: ['./src/prototypal', function(impoort, module, exports) {
    /** ****************************************************************************
     *
     * A ...
     *
     * prototypal.js is built upon the Prototypal Instantiation pattern. It
     * returns an object by calling its constructor. It doesn't use the new
     * keyword.
     *
     * Private Functions:
     *  . none,
     *
     *
     * Constructor:
     *  . ES6Pakket                  creates and returns the ES6Pakket object,
     *
     *
     * Public Static Methods:
     *  . noConflict                  returns a reference to this ES6Pakket object,
     *
     *
     * Public Methods:
     *  . getString                   returns a string,
     *  . getArray                    returns an array,
     *
     *
     *
     * @namespace    ES6Pakket
     * @dependencies none
     * @exports      -
     * @author       -
     * @since        0.0.0
     * @version      -
     * ************************************************************************** */
    /* - */
    /* eslint-disable one-var, semi-style */


    // -- Vendor Modules


    // -- Local Modules
    const Util = impoort('./util/util');


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousES6Pakket = root.ES6Pakket
        ;


    // -- Local Variables
    let methods
      ;


    // -- Public -------------------------------------------------------------------

    /**
     * Returns the ES6Pakket object.
     * (Prototypal Instantiation Pattern)
     *
     * @constructor (arg1)
     * @public
     * @param {String}          the argument to be saved as an object variable,
     * @returns {Object}        returns the ES6Pakket object,
     * @since 0.0.0
     */
    const ES6Pakket = function(name) {
      const obj = Object.create(methods);
      obj.name = name;
      return obj;
    };

    // Attaches a constant to ES6Pakket that provides the version of the lib.
    ES6Pakket.VERSION = '0.0.2-beta.1';


    // -- Public Static Methods ----------------------------------------------------

    /**
     * Returns a reference to this ES6Pakket object.
     *
     * Nota:
     * Running ES6Pakket in noConflic mode, returns the ES6Pakket variable to
     * its previous owner.
     *
     * @method ()
     * @public
     * @param {}                -,
     * @returns {String}        returns the ES6Pakket object,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    ES6Pakket.noConflict = function() {
      /* eslint-disable-next-line no-param-reassign */
      root.ES6Pakket = previousES6Pakket;
      return this;
    };


    // -- Public Methods -----------------------------------------------------------

    methods = {

      /**
       * Returns a string.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {String}      returns a string,
       * @since 0.0.0
       */
      getString() {
        return Util.getString();
      },

      /**
       * Returns an array.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {Array}       returns an array,
       * @since 0.0.0
       */
      getArray() {
        return Util.getArray();
      },
    };


    // -- Export
    /* eslint-disable-next-line no-param-reassign */
    module.exports = ES6Pakket;

    /* eslint-enable one-var, semi-style */

  /* eslint-disable-next-line */
  }, { './util/util': 2 }],

  /* eslint-disable-next-line no-unused-vars */
  2: ['./src/util/util', function(impoort, module, exports) {
    /** ****************************************************************************
     *
     * A ...
     *
     * util.js is just a literal object that contains a set of functions. It
     * can't be intantiated.
     *
     * Private Functions:
     *  . _getString                  returns a string,
     *  . _getArray                   returns an array,
     *
     *
     * Public Static Methods:
     *  . getString                   returns a string,
     *  . getArray                    returns an array,
     *
     *
     *
     * @namespace    ES6Pakket.src.util.util
     * @dependencies none
     * @exports      -
     * @author       -
     * @since        0.0.0
     * @version      -
     * ************************************************************************** */
    /* - */
    /* eslint-disable no-underscore-dangle */


    // -- Vendor Modules


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions --------------------------------------------------------

    /**
     * Returns a string.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {String}        returns a string,
     * @since 0.0.0
     */
    function _getString() {
      return 'I am a string!';
    }

    /**
     * Returns an array.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {Array}         returns an array,
     * @since 0.0.0
     */
    function _getArray() {
      return [1, 2, 3];
    }


    // -- Public Static Methods ----------------------------------------------------

    const Util = {

      /**
       * Returns a string.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {String}      returns a string,
       * @since 0.0.0
       */
      getString() {
        return _getString();
      },

      /**
       * Returns an array.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {Array}       returns an array,
       * @since 0.0.0
       */
      getArray() {
        return _getArray();
      },
    };


    // -- Export
    /* eslint-disable-next-line no-param-reassign */
    module.exports = Util;

    /* eslint-enable no-underscore-dangle */
  }, {}],

/* eslint-disable-next-line */
},{},[1])(1)}));
