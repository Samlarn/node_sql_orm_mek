const Sequelize = require('sequelize');
const db = require('../db/sqliteDB')


// Product model
const Product = db.define('product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    }}, {
        freezeTableName: true,
        //timestamps: false
    });


module.exports = Product;
