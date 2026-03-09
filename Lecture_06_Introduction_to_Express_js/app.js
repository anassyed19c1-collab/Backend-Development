import express from 'express'


const app = express()


app.use((req, res, next) => {
    console.log('first middleware', req.url, req.method);
    next();
});


app.use((req, res, next) => {
    console.log('second middleware', req.url, req.method);
    res.send('<h1>Welcome To Home Page</h1>')
});




const PORT = 3000;
app.listen(PORT, () => {
    console.log('server started');
})