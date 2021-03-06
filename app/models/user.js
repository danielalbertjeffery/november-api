'use strict';

var ssaclAttributeRoles = require('ssacl-attribute-roles');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    about_me: DataTypes.TEXT,

    hash: {
      type: DataTypes.STRING,
      roles: {
        admin: true
      }
    }
  }, {

    classMethods: {
      associate: function(models) {
        
        models.user.hasMany(models.task, { 
          foreignKey: { 
            as: 'user_id',
            allowNull: false 
          }
        });

      }
    },

    underscored: true,
    underscoredAll: true,
    createdAt: 'joined_at'
  });
  
  ssaclAttributeRoles(User);

  return User;
};