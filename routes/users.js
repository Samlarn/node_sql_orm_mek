const express = require('express');
const router = express.Router();

const db = require('../db/sqliteDB')
const User = require('../models/User')
const Task = require('../models/Task');

Task.belongsTo(User);
User.Tasks = User.hasMany(Task)

// get all users
router.get('/', async function(req, res) {
    const users = await User.findAll({include: Task})
    console.log(users)
    res.send(users)
});

// get all tasks
router.get('/tasks', async function(req, res) {
    const tasks = await Task.findAll({ include: User })
    res.send(tasks)
})

// Add a new user
router.post('/add', async function(req, res) {
    console.log(req.body)
    bdate = req.body.birthdate.toString().split('-')
    console.log(bdate)
    const newUser = await User.build({
               username: req.body.username,
               birthday: new Date(bdate[0], bdate[1], bdate[2])
             });
    if(req.body.admin) {
        newUser.admin = true
    }
    newUser.save();
    res.send(JSON.stringify(req.body))
});

// get user by id
router.get('/:id', async function(req, res) {
    const user = await User.findAll({
        where: {
            id: req.params.id
        }
    })
    res.send(user)
})

// add task to user by id
router.post('/tasks/:userId', async function(req, res) {
    const userId = req.params.userId
    const taskJson = req.body
    const task = await Task.create({
        name: taskJson.name,
        userId: userId

    })
    res.send(task)
})

// get tasks for a user by id
router.get('/tasks/:userId', async function(req, res) {
    const userTasks = await Task.findAll({
        where: {
            userId: req.params.userId
        }
    })
    res.send(userTasks)
})

module.exports = router;
