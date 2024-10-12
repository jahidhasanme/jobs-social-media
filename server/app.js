const express = require('express');
const cors = require('cors');
const config = require('./configs/config');
const connectDB = require('./configs/dbConfig');
const errorHandler = require('./middlewares/global_error');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1/health', require('./routes/v1/healthRoutes'));
app.use('/api/v1/auth', require('./routes/v1/authRoutes'));
app.use('/api/v1/users', require('./routes/v1/userRoutes'));

// Global error handling middleware
app.use(errorHandler);

connectDB();

module.exports = app;
