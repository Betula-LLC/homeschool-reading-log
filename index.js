import express from 'express';
import 'dotenv/config';
const app = express();
const port = process.env.PORT || 3001;
const apiKey = process.env.API_KEY;
const mongodbUri = process.env.MONGODB_URI;

if (!apiKey) {
    throw new Error('API_KEY is not set');
}

if (!mongodbUri) {
    throw new Error('MONGODB_URI is not set');
}

app.get('/', (req, res) => {

    res.send('Reading Log');
});

app.get('/api/health', (req, res) => {
    var status = 'ok';
    res.send(JSON.stringify({ status }));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});