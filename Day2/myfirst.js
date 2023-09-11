
const http = require('http');
const date = require('./module'); // Make sure the path is correct
const url=require('url')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('Date and Time is ' + date.myDate());
    const qp=url.parse(req.url,true).query
    res.write(qp.date+" "+qp.time)  //op:http://localhost:4000/?date=10&time=12:30
    // res.write(req.url)
    res.end();
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
