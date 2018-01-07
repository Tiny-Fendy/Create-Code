/**
 * 模板编译方法，创建代码的核心部分
 *
 * Created by fengdi on 2017/12/29.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */

let stringToObject = require('./stringToObject');

module.exports = function (text, json) {

	// 按照<%%>切割字符串
	let list = text.split(/<%|%>/);

	// 解析完成之后的数组
	let target = [];

	// 临时存放待编译内容的栈结构
	let stack = [];
	//指针当前所处层级
	let level = 0;

	// 去除首位空字符串
	if (!list[0]) list.shift();
	if (!list[list.length - 1]) list.pop();

	list.forEach((str, index) => {
		if (index % 2) {

			// 去除首位空格
			str = str.replace(/^\s+|\s+$/g, '');
			let strList = str.split(' ');
			let attr = strList[0];

			switch (attr) {
				case '=':
				case 'component':
					if (!level) {
						target.push(stringToObject([str], json));
					} else {
						stack.push(str);
					}
					break;
				case '}':
					level -= level;
					if (!level) {
						target.push(stringToObject(stack, json));
						stack = [];
					}
					break;
				default: //for || if
					stack.push(str);
					level += 1;
					break;
			}
		} else {
			if (level) {
				stack.push(str);
			} else {
				target.push(str);
			}
		}
	});

	return target.join('');
}