const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.TREFLE_API_KEY;  

const baseUrl = 'https://trefle.io/api/v1/plants';

async function fetchPlants() {
    try {
        const response = await axios.get(baseUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPlants();
