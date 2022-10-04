const path = require('path');


console.group('Start: print path module info')
console.log(`File separator: ${path.sep}`);
console.log(`Path join method ${path.join('/content','subfolder', 'test.text')}`)

console.log(`Directory Name :${__dirname}`);

console.log(`Concate with directory name :${path.resolve(__dirname, 'contenet', 'subfolder', 'test.text')}` )
console.groupEnd('End: print path module info'); 