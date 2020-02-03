/** ****************************************************************************
 *
 * A ...
 *
 * functional.js is built upon the Functional Instantiation pattern. It
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
/* global root */
/* eslint-disable one-var, semi-style */


// -- Vendor modules


// -- Local modules
import Util from './util/util';


// -- Local constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Pakket = root.ES6Pakket
    , obj = {}
    ;


// -- Local variables


// -- Public -------------------------------------------------------------------

/**
 * Returns the ES6Pakket object.
 * (Functional Instantiation Pattern)
 *
 * @constructor (arg1)
 * @public
 * @param {String}          the argument to be saved as an object variable,
 * @returns {Object}        returns the ES6Pakket object,
 * @since 0.0.0
 */
const ES6Pakket = function(name) {
  obj.name = name;
  return obj;
};

// Attaches a constant to ES6Pakket that provides the version of the lib.
ES6Pakket.VERSION = '{{lib:version}}';


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

/**
 * Returns a string.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {String}        returns a string,
 * @since 0.0.0
 */
obj.getString = function() {
  return Util.getString();
};

/**
 * Returns an array.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {Array}         returns an array,
 * @since 0.0.0
 */
obj.getArray = function() {
  return Util.getArray();
};


// -- Export
export default ES6Pakket;

/* eslint-enable one-var, semi-style */
