/** ****************************************************************************
 *
 * A ...
 *
 * basicplus.js is based on a variation of the basic.js pattern. The
 * properties are added dynamically. Thus, it can be divided in several
 * chunks of properties and the build can produces several versions of the
 * library by including or not some chunks.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6Pakket object,
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
/* global root, */
/* eslint-disable one-var, semi-style */


// -- Vendor Modules


// -- Local Modules
import extend from './lib/extend';
import Util from './util/util';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Pakket = root.ES6Pakket;


// -- Local Variables


// -- Public Static Methods ------------------------------------------------

const ES6Pakket = {

  /**
   * Returns a reference to this ES6Pakket object.
   *
   * Nota:
   * Running ES6Pakket in noConflic mode, returns the ES6Pakket variable to
   * its previous owner.
   *
   * @function ()
   * @public
   * @param {}              -,
   * @returns {String}      returns the ES6Pakket object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  noConflict() {
    /* eslint-disable-next-line no-param-reassign */
    root.ES6Pakket = previousES6Pakket;
    return this;
  },
};

// Attaches a constant to ES6Pakket that provides the version of the lib.
ES6Pakket.VERSION = '{{lib:version}}';


// Extends ES6Pakket with new static methods.
extend(ES6Pakket, {

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
});


// -- Export
export default ES6Pakket;

/* eslint-enable one-var, semi-style */
