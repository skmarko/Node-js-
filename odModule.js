
 const fs = require('fs');
// fs.readFile('file.txt' ,'utf8',(err,data)=>{
//     console.log(err,data)
// })

b= fs.writeFileSync('file.txt','This is data file')
console.log('End Code');