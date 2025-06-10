const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Deutsche Bank Clone API Running');
});

module.exports = app;
