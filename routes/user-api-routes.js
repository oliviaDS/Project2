const db = require('../models');

module.exports = function (app) {
  app.get('/api/user', (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findAll({
      include: [db.Answer],
    }).then((dbUser) => {
      res.json(dbUser);
    });
  });

  app.get('/api/user/:id', (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.User.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Answer],
    }).then((dbUser) => {
      res.json(dbUser);
    });
  });

  app.post('/api/user', (req, res) => {
    db.User.create(req.body).then((dbUser) => {
      res.json(dbUser);
    });
  });


// Delete button
  app.delete('/api/user/:id', (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbUser) => {
      res.json(dbUser);
    });
  });
};
