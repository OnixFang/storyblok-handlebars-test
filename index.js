// Modules
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
// Route modules
const indexRouter = require('./routes/index');
// Server variables
const app = express();
const port = 8017;

// Public assets folder
app.use(express.static(path.join(__dirname, 'public')));

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
app.use('/', indexRouter);

// Server Launch
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
