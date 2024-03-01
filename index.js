const express = require('express');
const path = require('path');

const app = express();





// Set EJS as the view engine
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));

// Set the path for static assets (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the ejs file
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/notice', (req, res) => {
  res.render('notice');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.get('/program', (req, res) => {
  res.render('program');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
