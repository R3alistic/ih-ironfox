// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");
const kitsu = require('kitsu');
const app = express();

hbs.registerHelper('ifIn', (array, element, options) => {
   const exists = array.find(el => {
       return el.slug === element
    })

    if(exists) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require('./config/session.config')(app);
require('./config/passport.config');

const capitalize = require("./utils/capitalize");
const projectName = "ih-ironfox";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require('./routes/index.routes');
const animesRoutes = require('./routes/animes.routes');
const authRoutes = require('./routes/auth.routes');
const profileRoutes = require('./routes/profile.routes');
app.use('/', indexRoutes);
app.use('/', animesRoutes);
app.use('/', authRoutes);
app.use('/', profileRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
