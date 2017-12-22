let fs = require('fs');
let path = require('path');

fs.readFile(path.dirname(__dirname + '/test.txt'), 'utf-8', (error, txt) => {
	console.log('1111', error, txt);
});