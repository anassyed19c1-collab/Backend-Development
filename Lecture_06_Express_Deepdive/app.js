import express from 'express';

const app = express();


app.use((req, res, next) => {
    console.log('First Middleware', req.url, req.method);
    next()
})


app.use((req, res, next) => {
    console.log('Second Middleware', req.url, req.method);
    next()
})


// app.use((req, res, next) => {
//     console.log('Third Middleware', req.url, req.method);
//     res.send(' <h1> Welcome to Third Middleware </h1> ')
// })



app.get('/', (req, res, next) => {
    console.log('Handling / for GET', req.url, req.method);
    res.send(' <h1>Handling / for GET</h1> ')
})


app.get('/contact', (req, res, next) => {
    console.log('Handling /contact for GET', req.url, req.method);
    res.send(`<h1>Handling /contact for GET</h1>
              <h1> Please Give Your Details Here </h10>
                <form action="/contact" method="POST">
                    <input type="text" name="name" placeholder="Enter Your Name">
                    <input type="email" name="email" placeholder="Enter Your email">
                    <input type="submit">
                </form>
`)
})


app.post('/contact', (req, res, next) => {
    console.log('Handling /contact for POST', req.url, req.method, req.body);

    res.send('<h1> We will contact  you stortly! </h1>')
    next()
})

app.use(express.urlencoded({ extended: false }));


app.post('/contact', (req, res, next) => {
    console.log('Handling /contact for POST', req.url, req.method, req.body);

    // res.send('<h1> We will contact  you stortly! </h1>')
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log('server started!');
})