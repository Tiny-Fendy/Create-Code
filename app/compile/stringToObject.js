/**
 * 根据传入的字符串
 *
 * Created by fengdi on 2017/12/29.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */

module.exports = function (text, json) {
	console.log('text =', text instanceof Array);
	let type = text[0].split(/\s/)[0];
	let methods = {
		'='() {

		},

		'for'() {

		},

		'if'() {

		},

		'component'() {

		}
	}

	methods[type](text);

	return text;
}