import express from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';


import homeRouter from './routes/home-Router.js';
import contactRouter from './routes/contact-us-Router.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);



const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);


// Error Handling Page
app.use((req, res) => {
    res.status(404).sendFile(Path.join(__dirname, './', 'views', 'error-404.html'))
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log('server started!');
})