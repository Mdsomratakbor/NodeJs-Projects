const _  = require('loadash')
const items = [1, [2, [3, [4]]]]
console.log(_.flattenDeep(items))