
let count = 1;
setInterval(()=>{
console.log(`Hello World-${count++}`);
}, 2000);
console.log('I will run first');

// process stays alive unless
// Kill Process CTRL + C
// unexpexted error
