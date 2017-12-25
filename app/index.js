let fs = require('fs');
let path = require('path');

let list = require('./tmp/list');

function fileName (name) {
	return path.join(__dirname, name);
}

// let file = fs.readFileSync(fileName('read.html'), 'utf-8');

// 创建文件

fs.writeFile(fileName('test.vue'), list(), err => {
	console.log(err);
});