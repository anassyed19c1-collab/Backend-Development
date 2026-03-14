import express from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);



const hostRouter = express.Router();



hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(Path.join(__dirname, '../', 'views', 'addHome.html'))
})


hostRouter.post('/add-home', (req, res, next) => {
    res.sendFile(Path.join(__dirname, '../', 'views', 'homeAdded.html'))
})


export default hostRouter;