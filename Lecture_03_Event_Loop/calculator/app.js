import http from 'http';
import sumHandler from './sumHandler.js';

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    if (req.url === '/') {

        res.setHeader('content-type', 'text/html')
        res.write(`
            
            <h1> Welcome to the Home Page </h1>
            <a href='/calculator'>Go To Calculator</a>
            
            `)
    } else if (req.url.toLowerCase() === '/calculator') {
        res.setHeader('content-type', 'text/html')
        res.write(`
            
            <h1> Welcome to the Calculator </h1>   
            <form action="/result" method="POST">
                <input type="text" placeholder='Enter First Number' name='first'>
                <input type="text" placeholder='Enter Second Number' name='second'>
                <input type="submit">
            </form>
        `)
    } else if (req.url.toLowerCase() === '/result' && req.method == 'POST') {

        sumHandler(req, res)

    } else {
        res.setHeader('content-type', 'text/html')
        res.write(`
            <h1> Error 404! </h1>   
            <a href='/'>Go To Home</a>
            `)
        }


})



const PORT = 3000;

server.listen(PORT, () => {
    console.log('Server Started');
})