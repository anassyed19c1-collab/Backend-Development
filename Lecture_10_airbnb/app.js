import express from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';

import userRouter from './routes/userRouter.js';
import hostRouter from './routes/hostRouter.js';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename)


app.use((req, res, next) => {
    console.log(req.url, req.method);
    next()
});


app.use(express.urlencoded());

app.use(userRouter);
app.use('/host', hostRouter);


app.use((req, res, next) => {
    res.status(404).sendFile(Path.join(__dirname, './', 'views', '404_Error.html'))
})



const PORT = 3000;
app.listen(PORT, () => {
    console.log('airbnb Server started');
})