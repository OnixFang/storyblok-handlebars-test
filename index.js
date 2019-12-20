// Modules
require('dotenv').config();
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();

// Route modules
const indexRoutes = require('./routes/index');
const profileRoutes = require('./routes/profile');

// Server configuration
app.use(express.static(path.join(__dirname, 'public')));  // Static Assets folder
app.use(express.json());                                  // JSON Body parser
app.use(express.urlencoded({ extended: true }));          // URL Encoded parser

// Template Engine
app.engine('hbs', exphbs(
  {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: './views/layouts/'
  }
));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Routes
app.use('/', indexRoutes);
app.use('/profile', profileRoutes);

// Server Launch
const port = process.env.PORT;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
