
let express = require('express');
const app = express();



let Blog = require('./routesExpressFrameworkYouTube/blog');
let User = require('./routesExpressFrameworkYouTube/user');

app.use(express.json());
//use middleware
app.use('/blog',Blog);
app.use('/user',User);

app.listen(8000);
