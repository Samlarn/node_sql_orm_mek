const express = require('express')
var bodyParser = require('body-parser')
// Database
const db = require('./db/sqliteDB')

// Connect to database
db.authenticate()
    .then(() => console.log('Connected to db...'))
    .catch(err => console.log('Error: '+ err))

// Init database tables
db.sync()
    .then(() => console.log('init db modelu'))
    .catch(err => console.log('Error: '+ err))


// Init express application
const app = express()

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/', (req, res) => {
    res.send('Index page..')
});

// Add routes to the application
app.use('/users', require('./routes/users'))
app.use('/products', require('./routes/products'))



const PORT = process.env.POST || 3000;
app.listen(PORT, console.log(`Server listening on port: ${PORT}`))



// const User = sequelize.define('user', {
//     username: Sequelize.STRING,
//     age: Sequelize.DATE
// });

// sequelize.sync().then(function() {
//     return User.create({
//       username: 'bob',
//       birthday: new Date(1984, 3, 12)
//     });
// }).then(function(jane) {
//     console.log(jane.get({
//       plain: true
//     }));
// });
