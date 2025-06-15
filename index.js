// Load environment variables
require('dotenv').config();

const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Enable JSON parsing
app.use(express.json());

// Supabase client setup
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// Health check route
app.get('/', (req, res) => {
  res.send('Server is running 🚀');
});

// Example route: save a message
app.post('/api/messages', async (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message required' });
  }

  const { data, error } = await supabase
    .from('messages')
    .insert([{ email, message }]);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to save message' });
  }

  res.json({ success: true, data });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
