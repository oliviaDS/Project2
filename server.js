// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================


const express = require('express');
var exphbs = require("express-handlebars");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing


// Set Handlebars.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const {createSeedData} = require('./utils/createSeedData');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
require('./routes/html-routes.js')(app);
require('./routes/user-api-routes.js')(app);
require('./routes/answer-api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(() => {

  // Seed Datas`
  createSeedData();

  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
