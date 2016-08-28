var Sequelize = require('sequelize');

// var db = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://stock:stock@localhost/stock');

var sequelize = new Sequelize('stock','root','')

// var sequelize = new Sequelize('connectionUri', {})

module.exports = sequelize;