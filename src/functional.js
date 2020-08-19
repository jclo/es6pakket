/** ************************************************************************
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
 *  . ES6Pakket                   creates and returns the ES6Pakket object,
 *
 *
 * Private Static Methods:
 *  . _setTestMode                returns internal objects for testing purpose,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6Pakket object,
 *
 *
 * Public Methods:
 *  . whoami                      returns the library name and version,
 *  . getString                   returns a string,
 *  . getArray                    returns an array,
 *
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ********************************************************************** */
/* global root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */


// -- Vendor Modules


// -- Local Modules
import Util from './util/util';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Pakket = root.ES6Pakket
    , obj = {}
    ;


// -- Local Variables


// -- Public ---------------------------------------------------------------

/**
 * Returns the ES6Pakket object.
 * (Functional Instantiation Pattern)
 *
 * @constructor ()
 * @public
 * @param {}                -,
 * @returns {Object}        returns the ES6Pakket object,
 * @since 0.0.0
 */
const ES6Pakket = function() {
  obj._library = {
    name: '{{lib:name}}',
    version: '{{lib:version}}',
  };
  return obj;
};

// Attaches constants to ES6Pakket that provide name and version of the lib.
ES6Pakket.NAME = '{{lib:name}}';
ES6Pakket.VERSION = '{{lib:version}}';


// -- Private Static Methods -----------------------------------------------

/**
 * Returns the internal objects for testing purpose.
 * (must not be deleted)
 *
 * @method ()
 * @private
 * @param {}                -,
 * @returns {Object}        returns a list of internal objects,
 * @since 0.0.0
 */
ES6Pakket._setTestMode = function() {
  return [];
};


// -- Public Static Methods ------------------------------------------------

/**
 * Returns a reference to this ES6Pakket object.
 * (must not be deleted)
 *
 * Nota:
 * Running ES6Pakket in noConflict mode, returns the ES6Pakket variable to
 * its previous owner.
 *
 * @method ()
 * @public
 * @param {}                -,
 * @returns {Object}        returns the ES6Pakket object,
 * @since 0.0.0
 */
ES6Pakket.noConflict = function() {
  /* eslint-disable-next-line no-param-reassign */
  root.ES6Pakket = previousES6Pakket;
  return this;
};


// -- Public Methods -------------------------------------------------------

/**
 * Returns the library name and version.
 * (must not be deleted)
 *
 * @method ()
 * @public
 * @param {}            -,
 * @returns {Object}    returns the library name and version,
 * @since 0.0.0
 */
obj.whoami = function() {
  return obj._library;
};

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

/* eslint-enable one-var, semi-style, no-underscore-dangle */
