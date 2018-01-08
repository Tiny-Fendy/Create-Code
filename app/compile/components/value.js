/**
 * VALUE
 *
 * Created by fengdi on 2018/1/7.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */

module.exports = (content, json) => {
	try {
		let func = new Function(...Object.keys(json), `return ${content}`);

		return func(...Object.values(json));
	} catch (err) {
		console.log(`[VALUE error]${err}`);
		return '';
	}
}