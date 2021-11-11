const express = require('express');  // Creating basic Express server
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load the config file
dotenv.config({ path: './config/config.env' });  // Where we put our global variables

// Connect the DB
connectDB();

// Initialize the app
const app = express();

// Run morgan in development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

