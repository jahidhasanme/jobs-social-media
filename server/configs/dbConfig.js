const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Failed to connect to MongoBD', error);
        process.exit(1);
    }
}

module.exports = connectDB;