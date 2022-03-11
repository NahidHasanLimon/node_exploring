const fs = require('fs');
const http = require('http');
const os = require('os');
const server = http.createServer((req,res)=>{
    fs.readFile('display.html',(err,data)=>{
        if(err){
            console.log('file reading unsuccessfull');
        }
        res.write(data);
        res.end();
    })
    console.log('Request URL: '+req.url);
    
})
server.listen('4141',()=>{
    console.log('Server running on 4141');
});
