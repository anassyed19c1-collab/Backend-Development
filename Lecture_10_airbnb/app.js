import { log } from 'console';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    console.log('airbnb server started', req.url, req.method);

    res.send('Airbnb Server Started!')
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log('airbnb Server started');
})