import express from 'express';


const userRouter = express.Router()


userRouter.get('/', (req, res) => {
    res.send(
        `
        Welcome to Airbnb!
        <br>
        <a href="/host/add-home">Add home</a>
        `
    )
})


export default userRouter;