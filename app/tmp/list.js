/**
 * 生成列表Vue代码
 *
 * Created by fengdi on 2017/12/24.
 * @copyright Copyright &copy; 2006-2017 Tuniu.com
 */

let fs = require('fs');
let path = require('path');
let tmp = require('./tmp.json');
let file = fs.readFileSync(path.join(__dirname, 'read.html'), 'utf-8');

let compile = require('../compile');

module.exports = compile(file, tmp);