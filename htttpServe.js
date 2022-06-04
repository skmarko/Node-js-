const http = require('http');
const port = process.env.PORT || 4000;
const server = http.createServer((req,res)=>{
    console.log(req.url);
    res.statusCode =200;
    res.setHeader('Content-type', 'text/html')
    res.end('<h1> Hello Marko g </h1> <p> This is node class Explaination</p>');
});

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})
