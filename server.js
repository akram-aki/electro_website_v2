const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT for Azure

// Serve static files from the ./client/dist directory
app.use(express.static(path.join(__dirname, 'client', 'dist')));

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.send("Server is working!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});