
const db = require('../models');

module.exports = {
    createSeedData: () => {
  
        // Create Users
        db.User
          .create({
            name: "Jack"
          })
          .then(user => {
            const jack = user.dataValues;
            console.log('Seed User1 Created', jack)
      
            // Create Answers
            db.Answer
              .create({
                Monday: 5,
                Tuesday: 5,
                Wednesday: 5,
                Thursday: 5,
                Friday: 5,
                Saturday: 5,
                Sunday: 5,
                UserId: jack.id,
              })
              .then(answer => {
                const jackAnswer = answer.dataValues;
                console.log('Seed Answer1 Created', jackAnswer)
              });
          });
      
          db.User
          .create({
            name: "Donovan"
          })
          .then(user => {
            const donovan = user.dataValues;
            console.log('Seed User2 Created', donovan)
      
            // Create Answers
            db.Answer
              .create({
                Monday: 5,
                Tuesday: 5,
                Wednesday: 5,
                Thursday: 5,
                Friday: 5,
                Saturday: 5,
                Sunday: 5,
                UserId: donovan.id,
              })
              .then(answer => {
                const donovanAnswer = answer.dataValues;
                console.log('Seed Answer1 Created', donovanAnswer)
              });
          });
      
          db.User
          .create({
            name: "Olivia"
          })
          .then(user => {
            const olivia = user.dataValues;
            console.log('Seed User2 Created', olivia)
      
            // Create Answers
            db.Answer
              .create({
                Monday: 5,
                Tuesday: 5,
                Wednesday: 5,
                Thursday: 5,
                Friday: 5,
                Saturday: 5,
                Sunday: 5,
                UserId: olivia.id,
              })
              .then(answer => {
                const oliviaAnswer = answer.dataValues;
                console.log('Seed Answer1 Created', oliviaAnswer)
              });
          });
      
          db.User
          .create({
            name: "Abbas"
          })
          .then(user => {
            const abbas = user.dataValues;
            console.log('Seed User2 Created', abbas)
      
            // Create Answers
            db.Answer
              .create({
                Monday: 5,
                Tuesday: 5,
                Wednesday: 5,
                Thursday: 5,
                Friday: 5,
                Saturday: 5,
                Sunday: 5,
                UserId: abbas.id,
              })
              .then(answer => {
                const abbasAnswer = answer.dataValues;
                console.log('Seed Answer1 Created', abbasAnswer)
              });
          });
    }
}