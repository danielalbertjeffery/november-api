'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('tasks', {

    title: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    recurrence: DataTypes.STRING,
    points: DataTypes.STRING
      
  }, {
    
    classMethods: {
      associate: function(models) {
        models.task.belongsTo(models.user, {
          onDelete: 'cascade'
        });
      }
    },

    underscored: true,
    underscoredAll: true

  });
  
  ssaclAttributeRoles(Task);

  return Task;
};

