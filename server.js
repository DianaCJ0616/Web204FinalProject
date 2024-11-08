require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/plants', async (req, res) => {
    const apiKey = process.env.TREFLE_API_KEY;
    try {
        const response = await fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`);
        if (response.ok) {
            const data = await response.json();
            res.json(data); 
        } else {
            res.status(response.status).send('Error fetching data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
