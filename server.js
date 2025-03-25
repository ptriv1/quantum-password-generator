const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello world');
});

app.get('/quantum-password', async (req, res) => {
    const response = await fetch('https://qrng.anu.edu.au/API/jsonI.php?length=8&type=uint8');
    const data = await response.json();
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const password = data.data.map(number => chars[number % chars.length]).join('');
    res.send(`Quantum password: ${password}`);

});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});