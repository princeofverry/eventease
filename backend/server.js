const express = require('express');
const dotenv = require('dotenv');
const session = require('express-session');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const formRoutes = require('./routes/formRoutes');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

// Database connection
connectDB();

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://eventease-coral.vercel.app/'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    },
  })
);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/form', formRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error', error: err.message });
});

// Catch-all route
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Export for Vercel
module.exports = app;