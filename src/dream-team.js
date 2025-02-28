const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	// remove line with error and write your code here
	let string = [];
	if (Array.isArray(members)) {
		for (let i = 0; i < (members.filter(n => typeof n === 'string')).length; i++) {
			string.push(((members.filter(n => typeof n === 'string'))[i].replaceAll(' ', ''))[0].toUpperCase())
		}
		return string.sort().join('').toUpperCase()
	}
	return false
}
module.exports = {
	createDreamTeam
};
