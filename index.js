const express = require('express');
const app = express();
const { connectDB } = require('./config/db');
const mongoose = require('mongoose');
require('dotenv').config()
const colors = require('colors');

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, console.log(`Server started on port ${PORT}`.cyan.underline.bold));	
