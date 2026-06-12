const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Basic health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Meridian Backend API is running' });
});

// Waitlist registration handler
app.post('/api/waitlist', (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    console.log(`[BACKEND SERVER] Waitlist registration received: ${email}`);

    // Return success response to the client
    return res.status(200).json({
      success: true,
      message: 'Successfully registered on the backend waitlist.',
      email
    });
  } catch (error) {
    console.error('Waitlist registration error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`[BACKEND SERVER] Server is running on http://localhost:${PORT}`);
});
