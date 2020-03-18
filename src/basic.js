/** ****************************************************************************
 *
 * A ...
 *
 * basic.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
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
/* global root */
/* - */


// -- Vendor Modules


// -- Local Modules
import Util from './util/util';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Pakket = root.ES6Pakket;


// -- Local Variables


// -- Public Static Methods ----------------------------------------------------

const ES6Pakket = {

  /**
   * Returns a reference to this ES6Pakket object.
   *
   * Nota:
   * Running ES6Pakket in noConflic mode, returns the ES6Pakket variable to
   * its previous owner.
   *
   * @method ()
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

// Attaches a constant to ES6Pakket that provides the version of the lib.
ES6Pakket.VERSION = '{{lib:version}}';


// -- Export
export default ES6Pakket;

/* - */
