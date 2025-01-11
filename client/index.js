import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON request body

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Hardcoded credentials
const validUsername = "admin";
const validPassword = "password123";

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
