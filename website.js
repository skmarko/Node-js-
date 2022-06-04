const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 5000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode =200;
    res.setHeader('Content-type', 'text/html')
if(req.url=='/'){
    res.statusCode =200;
    res.end('<h1> Hello Node Home Page  </h1> <p> This is node class Explaination</p>');
}
else if(req.url=='/about'){
    res.statusCode =200;
    res.end('<h1> Hello Node About  </h1> <p> This is node class About page Explaination</p>');
}

else if(req.url=='/hello'){
    res.statusCode =200;
const data =fs.readFileSync('index.html');
res.end(data.toString());
    
}
else{
    res.statusCode=404;
    res.end('<h1> Node Page Not Found </h1> <p> Not Give the explaination</p>');
}
 
});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
