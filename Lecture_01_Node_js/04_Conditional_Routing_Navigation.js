import http from 'http';


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.write('<h1> Welcome to Main Page </h1>')

    if (req.url === '/home') {
        res.write('<h1> Home Page </h1>')
    } else if (req.url === '/men') {
        res.write('<h1> Men Page </h1>')
    } else if (req.url === '/women') {
        res.write('<h1> Women Page </h1>')
    } else if (req.url === '/kids') {
        res.write('<h1> Kids Page </h1>')
    } else if (req.url === '/cart') {
        res.write('<h1> Cart Page </h1>')
    }



    res.write(`
        <html lang="en">
            <head>
                <title>Main Page</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/home">Home Page</a></li>
                        <li><a href="/men">Men Page</a></li>
                        <li><a href="/women">Women Page</a></li>
                        <li><a href="/kids">Kids Page</a></li>
                        <li><a href="/cart">Cart Page</a></li>
                    </ul>
                </nav>
            </body>
        </html>
    `)


})




server.listen(3000, () => {
    console.log('Server Started');
})