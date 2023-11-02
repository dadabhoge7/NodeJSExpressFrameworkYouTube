
let express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Blog_Demo');
console.log(`Connect the DB`);

let Blog = require('./A2');
app.use(express.json());
//use middleware
app.use('/blog',Blog);

// app.listen(2000);