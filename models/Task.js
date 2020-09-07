const Sequelize = require('sequelize');
const db = require('../db/sqliteDB')
//const User = require('./User')

// User model
const Task = db.define('task', {
    name: {
            type: Sequelize.STRING,
            allowNull: false,
    }
}, {
    //freezeTableName: true,
    timestamps: false
});

module.exports = Task;
