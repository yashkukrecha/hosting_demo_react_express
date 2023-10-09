const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;  // Use the PORT environment variable, default to 5000 if not set.

// Middleware to enable CORS
app.use(cors());

// Sample endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
