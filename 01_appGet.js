let express = require('express');
let app = express();

app.get('/',(req,res)=>{
res.send("<h1> You are in home Rout </h1>");
});

app.get('/about',(req,res)=>{
res.status(200).send('You are in about route');
});

app.get('/api/student',(req,res)=>{
res.json({name : "Dada", class : "BE"});
});


app.listen(5000);