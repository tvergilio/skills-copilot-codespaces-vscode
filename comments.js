// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Require the comments file
const comments = require('./comments');

// Use the comments file as middleware
app.use(comments);

// Start the server
app.listen(port, () => console.log(`Server started on port ${port}`));