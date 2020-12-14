// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require('../models');

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the posts
  app.get('/api/answer', (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }

    db.Answer.findAll({
      where: query,
      include: [db.User],
    }).then((dbAnswer) => {
      res.json(dbAnswer);
    });
  });

  // Get route for retrieving a single post
  app.get('/api/answer/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Answer.findAll({
      where: {
        UserId: req.params.id,
      },
      include: [db.User],
    }).then((dbAnswer) => {
      res.json(dbAnswer);
    });
  });

  // POST route for saving a new answer
  app.post('/api/answer', (req, res) => {
    db.Answer.create(req.body).then((dbAnswer) => {
      res.json(dbAnswer);
    });
  });

  // DELETE route for deleting posts
  app.delete('/api/answer/:id', (req, res) => {
    db.Answer.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbAnswer) => {
      res.json(dbAnswer);
    });
  });

  app.put('/api/answer', (req, res) => {
    db.Answer.update(
      req.body,
      {
        where: {
          id: req.body.id,
        },
      },
    ).then((dbAnswer) => {
      res.json(dbAnswer);
    });
  });
};
