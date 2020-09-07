const express = require('express');
const router = express.Router();

const db = require('../db/sqliteDB')
const Product = require('../models/Product')


router.get('/', (req, res) => {
    Product.findAll()
        .then(product => {
            console.log(product)
            res.send(product)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(404)
        });
    //res.send('product')
});


router.post('/add', (req, res) => {
    console.log(req.body)
    Product.create({
               name: req.body.name,
               description: req.body.description
             });
    res.send(JSON.stringify(req.body))
});

module.exports = router;
