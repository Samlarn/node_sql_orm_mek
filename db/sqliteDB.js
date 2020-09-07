const { Sequelize, Op, Model } = require("sequelize");

// Option 2: Passing parameters separately (sqlite)
module.exports = new Sequelize({
    dialect: 'sqlite',
    storage: 'dev-database.db'
});

