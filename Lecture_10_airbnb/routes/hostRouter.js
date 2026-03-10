import express from 'express';

const hostRouter = express.Router();


hostRouter.get('/host/add-home', (req, res, next) => {
    res.send(
        `
        <h1>Register Your Home</h1>
        <br>
        <form action="/host/add-home" method="post">
            <input type="text" name="houseName" placeholder="Enter House Name">
            <input type="submit">
        </form>
        `
    )
})


hostRouter.post('/host/add-home', (req, res, next) => {
    res.send(
        `
        <h1>House Successfully Added</h1>
        <a href="/">Go To home</a>
        `
    )
})


export default hostRouter;