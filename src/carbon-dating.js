const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

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
	// remove line with error and write your code here
	if (typeof sampleActivity !== 'string' || sampleActivity === '' || sampleActivity === ' ' || sampleActivity === '0' || sampleActivity === ' \n\t\r' || Number(sampleActivity) < 0 || Number(sampleActivity) > 15) {
		return false;
	} else {
		let answer = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
		if (answer.length > 5) {
			return false
		} else if (typeof answer === 'number') {
			if (isNaN(answer)) {
				return false
			};
			return Math.ceil(answer)
		} else {
			return false
		}
	}
}

module.exports = {
	dateSample
};
