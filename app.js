const express = require('express');
const { connectDatabase } = require('./config/dbconn');
const app = express();

app.use(express.json())

// Product Routes Import
const product = require('./routes/productRoutes');
app.use("/api/",product);

// User Route Import
const user = require('./routes/userRoutes');
app.use("/api",user);


module.exports = app;