import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Create an Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON request body

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

// Hardcoded credentials
const validCredentials = [
  { username: "admin", password: "password123" },
  { username: "sglover", password: "whyy@1234" }
];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate credentials
  const validUser = validCredentials.find(
    (cred) => cred.username === username && cred.password === password
  );

  if (validUser) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(400).json({ message: 'Invalid username or password' });
  }
});

// Export the Express app as a handler
export default app;