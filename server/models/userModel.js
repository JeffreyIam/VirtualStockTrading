var Sequelize = require('sequelize');
var bcrypt = require('bcrypt-nodejs');
var db = require('../config/db.js');

//User Model
var User = db.define('User', {
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {
  instanceMethods: {
    hashPassword: function() {
      var salt = bcrypt.genSaltSync(9);
      return bcrypt.hashSync(this.password, salt);
    },
    validPassword: function(inputpass, pass) {
      return bcrypt.compareSync(inputpass, pass);
    }
  }
});


User.beforeCreate(function(user, options) {
  user.password = user.hashPassword();
});


User.sync();
module.exports = User;
