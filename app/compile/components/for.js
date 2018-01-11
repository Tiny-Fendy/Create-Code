/**
 * FOR
 *
 * Created by fengdi on 2018/1/8.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */

let utils = require();
let compile = require('./../index');
let value = require('./value');

module.exports = (list = [], json) => {
	let head = list.shift();
	let array = value(head[2], json) || [];
	let scopeChain = [json];

	return array.map((item, index) => {

	}).join(' ');
}