import http from 'http';
import syntax from './syntax.js';


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.write(' <h1> Error Server Ready! </h1> ')

    syntax()

})


const PORT = 3000;
server.listen(PORT, () => {
    console.log('Error Server Started!');
})