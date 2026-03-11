import express from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);


const contactRouter = express.Router();


contactRouter.get('/contact', (req, res) => {
    res.sendFile(Path.join(__dirname, '../', 'views', 'contact.html'))
})


contactRouter.post('/contact', (req, res, next) => {
    console.log(req.body);
    res.sendFile(Path.join(__dirname, '../', 'views', 'response.html'))
})


export default contactRouter;