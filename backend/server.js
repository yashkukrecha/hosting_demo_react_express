const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Middleware to enable CORS
app.use(cors());

// Sample endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
