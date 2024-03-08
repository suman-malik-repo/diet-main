const express = require('express');
const path = require('path');

const app = express();



const expressLayouts = require('express-ejs-layouts');

//define layout
app.use(expressLayouts);

// Set EJS as the view engine
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));

// Set the path for static assets (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));





// Define a route to render the ejs file

app.use('/',require('./routes'));


// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
