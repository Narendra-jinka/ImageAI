import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import bs64image from '../utils/base64Image.js';

dotenv.config();
const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your API key is loaded from .env
});

router.get('/', (req, res) => {
    res.send('Hello World from OpenAIApi');
});

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;

        // const aiResponse = await openai.images.generate({
        //     model: "dall-e-3",
        //     prompt, // Prompt for image generation
        //     n: 1, // Number of images
        //     size: '1024x1024', // Image resolution
        //     response_format: 'b64_json', // Base64-encoded image response
        // });
        const aiResponse = {
            data: [
                { b64_json: bs64image }
            ]
        };
        

        const image = aiResponse.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (err) {
        //console.error('Error:', err);
        res.status(500).send('Imgae generation credits are not available')
    }
});

export default router;
