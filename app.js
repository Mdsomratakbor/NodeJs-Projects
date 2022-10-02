const path = require('path');


console.group('Start: print path module info')
console.log(`File separator: ${path.sep}`);
console.log(`Path join method ${path.join('/content','subfolder', 'test.text')}`)
console.groupEnd('End: print path module info');