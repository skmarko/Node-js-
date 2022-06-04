var express = require('express')
var app = express()
const port= 3000


app.get('/', function (req, res) {
  res.send('hello world')
})
app.get('/about', function (req, res) {
    res.send('Hello About node page')
  })

app.listen(port,()=>{
    console.log(`app listen at http://localhost:${port}`);
})