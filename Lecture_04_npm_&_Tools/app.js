import http from 'http';


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.write(' <h1> Server Ready Here! </h1> ')

})


const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server Started!');
})