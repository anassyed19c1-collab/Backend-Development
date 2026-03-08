import http from 'http';


const server = http.createServer((req, res) => {
    // console.log(req);

    console.log(req.url, req.method, req.headers);


    req.url

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hello World!</title></head>')
        res.write('<body><h1>Home page</h1></body>')
        res.write('</html>')
        return res.end()
    } else if (req.url === "/products") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hello World!</title></head>')
        res.write('<body><h1>Products Page</h1></body>')
        res.write('</html>')
        return res.end()
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hello World!</title></head>')
        res.write('<body><h1>Error 404</h1></body>')
        res.write('</html>')
        res.end()
    }


    // res.setHeader('Content-Type', 'text/html')
    // res.write('<html>')
    // res.write('<head><title>Hello World!</title></head>')
    // res.write('<body><h1>Home Page</h1></body>')
    // res.write('</html>')
    // res.end()




    // process.exit();
})


server.listen(3000, () => {
    console.log('Server Started!');
})