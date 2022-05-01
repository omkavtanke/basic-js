const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	// remove line with error and write your code here
	let result = []
	let free = 0
	if (Array.isArray(arr)) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === '--discard-next') {
				if (i >= arr.length) {
				} else {
					i = i + 2
				}
			} else if (arr[i] === '--discard-prev') {
				if (i <= 0) {
				} else {
					result.splice(i - 1, 1)
				}
			} else if (arr[i] === '--double-next') {
				if (i + 1 >= arr.length) {
				} else {
					result.push(arr[i + 1]);
				}
			} else if (arr[i] === '--double-prev') {
				if (i <= 0) {
				} else {
					result.push(arr[i - 1]);
				}
			} else {
				result.push(arr[i]);
			}
		}
		for (let q = 0; q < result.length; q++) {
			if (result[q] === '--double-prev' || result[q] === '--double-next' || result[q] === '--discard-prev' || result[q] === '--discard-next') {
				result.pop(result[q])
			}
		}
		return result
	}
	throw new Error("'arr' parameter must be an instance of the Array!");
}

module.exports = {
	transform
};
