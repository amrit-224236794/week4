const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const path = require('path');
const lectureRoutes = require('./routes/lectureRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/lecturesDB');

app.use(express.json());
app.use(cookieParser());

// Use the lecture routes
app.use('/', lectureRoutes);

// Serve the frontend HTML file as the last route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
