const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/health', (req, res) => {
    var status = 'ok';
    res.send(JSON.stringify({ status }));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});