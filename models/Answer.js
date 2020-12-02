module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {

    Monday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

    Tuesday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

    Wednesday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

    Thursday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

    Friday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

    Saturday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

    Sunday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: [5],
        min: [0],
      },
    },

  });

  Answer.associate = function(models) {
    Answer.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Answer;
};