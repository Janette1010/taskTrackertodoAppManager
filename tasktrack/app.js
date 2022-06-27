var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

//set template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./work'));

//fire controllers
todoController(app)

//listen to port
app.listen(2000);
console.log('listening port 2000');