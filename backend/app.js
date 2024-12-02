const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const app = express();

mongoose.connect('mongodb://mongo:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/books', bookRoutes);

app.listen(5000, () => console.log('Backend running on port 5000'));

