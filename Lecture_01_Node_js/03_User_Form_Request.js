import http from 'http';
import fs from 'fs'

const server = http.createServer((req, res) => {
    // console.log(req);

    console.log(req.url, req.method, req.headers);


    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST" >');
        res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="male" name="gender" value="male" />')
        res.write('<label for="female">Female</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" />')
        res.write('<br><input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if  ( req.method == "POST" && req.url.toLowerCase() === "/submit-details") {
        fs.writeFileSync('user.txt', 'User Details');
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Hello World!</title></head>')
        res.write('<body><h1>Details Page</h1></body>')
        res.write('</html>')
        res.end()
    }
        

})


server.listen(3000, () => {
    console.log('Server Started!');
})