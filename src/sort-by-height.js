const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 * [-1, 150, 190, 170, -1, -1, 160, 180]
 * [150, 160, 170, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithout = arr.filter(elemen => elemen !== -1);
  arrWithout.sort((a, b) => a - b);
  
  let countI = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      countI++;
      continue;
    }
    arr[i] = arrWithout[i - countI];
  }
  return arr;
}
module.exports = {
  sortByHeight
};
