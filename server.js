const express = require('express');
const bodyParser = require('body-parser');
const { signup, login } = require('./controllers/authController');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// Routes
app.post('/signup', signup);
app.post('/login', login);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
