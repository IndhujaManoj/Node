const http=require('http')
const url=require('url')
const fs=require('fs')

const server=http.createServer((req,res)=>{
    const query=url.parse(req.url,true)
    fs.readFile(`.${query.pathname}`,(err,data)=>{
        if(err){
            res.writeHead(404,{'content-Type':'text/html'})
            return res.end('404 Not Found')
        }
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        return res.end()

    })
})

server.listen(7000,()=>{
    console.log('port is running on port number 7000')
})