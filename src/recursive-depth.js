const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const depth = 1 + this.calculateDepth(arr[i]);
        count = Math.max(count, depth);
      }
    }

    return count;
  }
  //   let count = 0;
  //   function arrSearch(arrInheritor, countArr) {
      
  //     countArr++;

  //     for (let i = 0; i < arrInheritor.length; i++) {
  //       if (Array.isArray(arrInheritor[i])) {
  //         arrSearch(arrInheritor[i], countArr)
  //       }
  //     }

  //     count = countArr > count ? countArr : count;
  //     return countArr;
  //   }
  //   if (Array.isArray(arr)) {
  //     arrSearch(arr, count);
  //   }

  //   return count === 0 ? 1 : count;
  // }

}

module.exports = {
  DepthCalculator
};
