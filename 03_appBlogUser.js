
let express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Blog_Demo');
console.log(`Connect the DB`);

let Blog = require('./routesExpressFrameworkYouTube/blog');
let User = require('./routesExpressFrameworkYouTube/user');
app.use(express.json());
//use middleware
app.use('/blog',Blog);
app.use('/user',User);

app.listen(8000);
