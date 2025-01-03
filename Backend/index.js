
import express from 'express';
import * as dotenv from "dotenv";
import cors from 'cors';
import  connectDB  from './MongoDb/connect.js';

import postRoutes from './routes/postRoutes.js';
import imageAIRoutes from './routes/imageAIRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/imageAI', imageAIRoutes);

app.get('/', async (req, res) => {
    res.send('Hello World');
});

const startServer = async() => {
    try{
        await connectDB();
        app.listen(8080, () => {
            console.log('Server is running on port 5000');
        });
    }
    catch(err){
        console.log(err);
    }

    
};

startServer();
