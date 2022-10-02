const os  = require('os');

// info about current user

const user = os.userInfo();

const  currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.group('===Operating system Info: Start===')
console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime()/3600} hours`);

console.log(currentOS)

console.groupEnd('=== Operating system info : End===')