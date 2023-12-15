const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const speedReaction = (0.693 * 1000) / (HALF_LIFE_PERIOD * 1000)

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) >= 15) {
    return false;
  }

  const activity = parseFloat(sampleActivity);
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / speedReaction);
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
