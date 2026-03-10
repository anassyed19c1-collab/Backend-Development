import express from 'express';

import userRouter from './routes/userRouter.js';
import hostRouter from './routes/hostRouter.js';

const app = express();


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next()
});


app.use(express.urlencoded());

app.use(userRouter);

app.use(hostRouter)


// Shift in userRouter.js
// app.get('/', (req, res) => {
//     res.send(
//         `
//         Welcome to Airbnb!
//         <br>
//         <a href="/host/add-home">Add home</a>
//         `
//     )
// })

// Shift in hostRouter.js
// app.get('/host/add-home', (req, res, next) => {
//     res.send(
//         `
//         <h1>Register Your Home</h1>
//         <br>
//         <form action="/host/add-home" method="post">
//             <input type="text" name="houseName" placeholder="Enter House Name">
//             <input type="submit">
//         </form>
//         `
//     )
// })


// app.post('/host/add-home', (req, res, next) => {
//     res.send(
//         `
//         <h1>House Successfully Added</h1>
//         <a href="/">Go To home</a>
//         `
//     )
// })





// app.get('/', (req, res) => {
//     console.log('airbnb server started', req.url, req.method);

//     res.send('Airbnb Server Started!')
// })


const PORT = 3000;
app.listen(PORT, () => {
    console.log('airbnb Server started');
})