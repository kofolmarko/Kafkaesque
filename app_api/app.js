const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const mongodbURI = {
    dev: 'mongodb://localhost:27017/kafkaesque'
}

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable CORS policy
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

// Import routes
const thoughtsRoute = require('./routes/thoughts');

// Middlewares
app.use('/thoughts', thoughtsRoute);

// ROUTES
app.get('/', (req, res) => {
    res.send('Show us your kafkaesquesness');
});


// Connect to DB
mongoose.connect(mongodbURI.dev,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('Connection to database estblished!');
    }
);

app.listen(3000);