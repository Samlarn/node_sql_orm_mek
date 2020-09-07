const Sequelize = require('sequelize');
const db = require('../db/sqliteDB')
//const Task = require('./Task')

// User model
const User = db.define('user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        birthday: {
            type: Sequelize.DATE
        }
}, {
        timestamps: false
});
//.hasMany(Task, {as: 'tasks', foreignKey: 'userId'});

//const Task = require('./Task')
//User.hasMany(Task);

module.exports = User;
