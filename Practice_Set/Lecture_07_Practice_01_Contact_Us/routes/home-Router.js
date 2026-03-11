import express from 'express';
import Path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);


const homeRouter = express.Router()

homeRouter.get('/', (req, res) => {
    res.sendFile(Path.join(__dirname, '../', 'views', 'home.html'))
})


export default homeRouter;