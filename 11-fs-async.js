const {readFile, writeFile} = require('fs');

console.log('started a first task!!')
readFile('./content/first.txt','utf-8',(error, result)=>{
    if(error){
        console.log(error);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(error, result)=>{
        if(error){
            console.log(error);
            return;
        }
        const second = result;
        writeFile(
            './content/result-async.txt', 
        `Here is the result : ${first}, ${second}`,
        (error, result)=>{
            if(error)
            {
                 console.log(error);
                return;

            }
            console.log(result);
           console.log('complete the task!!')
        })
    })
   
})
console.log('starting a next task!!')