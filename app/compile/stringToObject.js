/**
 * 根据传入的字符串
 *
 * Created by fengdi on 2017/12/29.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */

let Value = require('./components/value');
let Includes = require('./components/includes');
let If = require('./components/if');
let For = require('./components/for');

let methods = {
	'='(content, json) {
		return Value(content[0], json);
	},

	'for'(content, text, json) {
		text.splice(0, 1, content.slice(0, -1));

		return For(text, json);
	},

	'if'(content, text, json) {
		text.splice(0, 1, content.slice(0, -1));

		return For(text, json);
	},

	'includes': Includes
}

module.exports = function (text, json) {
	let [type, ...content] = text[0].split(/\s/);

	return methods[type](content, text, json);
}