const express = require('express');  // Creating basic Express server
const dotenv = require('dotenv');

// Load the config file
dotenv.config({ path: './config/config.env' });  // Where we put our global variables

// Initialize the app
const app = express();

const PORT = process.env.PORT

app.listen()

