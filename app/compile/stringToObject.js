/**
 * 根据传入的字符串
 *
 * Created by fengdi on 2017/12/29.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */
let methods = {
	'='(str) {
		return str;
	},

	'for'(list) {
		return list.toString();
	},

	'if'(list) {
		return list.toString();
	},

	'component'(str) {
		return str;
	}
}

module.exports = function (text, json) {
	let type = text[0].split(/\s/)[0];

	console.log(type, methods[type](text));
	return methods[type](text);
}