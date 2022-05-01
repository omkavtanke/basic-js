const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	let check = new Date()
	// remove line with error and write your code here
	if (!date) {
		return "Unable to determine the time of year!"
	}
	if (date.toString() === (new Date()).toString() || !date.getTime) {
		throw new Error('Invalid date!');
	}
	let a = date.getMonth()
	if (a >= 0 && a <= 1 || a === 11) {
		return 'winter'
	} else if (a >= 2 && a <= 4) {
		return 'spring'
	} else if (a >= 5 && a <= 7) {
		return 'summer'
	} else if (a >= 8 && a <= 10) {
		return 'autumn'
	}
}



module.exports = {
	getSeason
};
