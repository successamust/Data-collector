import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Setup __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors({ origin: '*' }));

app.use(express.json());
// app.use(express.static(path.join(__dirname, '../public')));

//for testing
// app.get('/', (req, res) => {
//     res.send('API is running 🚀');
//   });

// Routes
app.post('/submit', async (req, res) => {
    const { password, data } = req.body;
  
    if (password !== process.env.ACCESS_PASSWORD) {
      return res.status(403).json({ error: 'Access Denied' });
    }
  
    if (!data) {
      return res.status(400).json({ error: 'No data provided' });
    }
  
    try {
      await axios.post(process.env.REMOTE_API_URL, { data });
  
      res.json('✅ Data sent successfully!');
  
    } catch (error) {
      console.error('Error from remote API:', error.message);
  
      res.status(500).json({
        error: 'Failed to process your request.',
        details: error.message
      });
    }
  });  

//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
//   });
  
app.post('/check-password', (req, res) => {
    const { password } = req.body;
  
    if (password === process.env.ACCESS_PASSWORD) {
      return res.json({ ok: true });
    } else {
      return res.status(403).json({ error: 'Invalid password' });
    }
  });
  
   
  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
