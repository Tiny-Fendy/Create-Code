/**
 * FOR
 *
 * Created by fengdi on 2018/1/8.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */
let value = require('./value');

module.exports = (list = [], json) => {
	let head = list.shift();
	let array = value(head[2], json) || [];

	array.forEach(item => {

	});

	return list.toString();
}