const _  = require('lodash')
const items = [1, [2, [3, [4],[5]]],[6]]
console.log(_.flattenDeep(items))