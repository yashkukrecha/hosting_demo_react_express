const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 4000;

// Middleware to enable CORS
app.use(cors());

// Sample endpoint
app.get('/message', (req, res) => {
    console.log("GET endpoint contacted")
    res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
