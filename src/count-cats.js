const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  return matrix.reduce((count, place) => {
    // if (place.indexOf('^^') !== -1) return count += 1;
    for (let i = 0; i < place.length; i++) {
      if ('^^' === place[i]) count += 1;
    }
    return count;
  },0)
}

module.exports = {
  countCats
};
