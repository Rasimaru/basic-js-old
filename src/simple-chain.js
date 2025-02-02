const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],

	getLength() {
		// remove line with error and write your code here
		return this.chain.length;
	},

	addLink(value) {
		// remove line with error and write your code here
		this.chain.push(`( ${value} )`);
		return this;
	},
	removeLink(position) {
		// remove line with error and write your code here
		if (typeof position !== 'number' || position < 1 || position > this.chain.length || position % 1) {
			this.chain = [];
			throw Error("You can't remove incorrect link!");
		}
		this.chain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		// remove line with error and write your code here
		this.chain.reverse();
		return this;
	},
	finishChain() {
		// remove line with error and write your code here
		let res = this.chain.join('~~');
		this.chain = [];
		return res;
	}
};

module.exports = {
	chainMaker
};
