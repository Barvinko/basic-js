const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let string1 = s1.split('');
  let string2 = s2.split('');
  let count = 0;

    function iterating(strIter1, strIter2) {
      for (let i = 0; i < strIter1.length; i++) {
        for (let j = 0; j < strIter2.length; j++) {
          if (string1[i] === string2[j]) {
            count += 1
            strIter1.splice(i,1)
            strIter2.splice(j,1)
            iterating(strIter1,strIter2)
            return;
          }
        }
      }
    }

  iterating(string1,string2)

  return count;
}

module.exports = {
  getCommonCharacterCount
};
