import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000; // Use process.env.PORT for Azure
app.get('/', (req, res) => {
  res.send("Welcome to the home page!");
});

app.get('/test', (req, res) => {
  res.send("Server is working!");
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
