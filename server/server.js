const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = "https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/a69b6556-7432-43ff-a2e4-e051faad9972/v1/analyze?version=2022-04-07";

app.post('/analyse', async (req, res) => {
    const { text, features } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Missing text' });
    }

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Basic ${Buffer.from(`apikey:${apiKey}`).toString('base64')}`
            },
            body: JSON.stringify({
                text: text,
                features: features || { sentiment: {} }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({
                error: 'IBM API error',
                details: errorText
            });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({
            error: "Internal server error",
            message: err.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
