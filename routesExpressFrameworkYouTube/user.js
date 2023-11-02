let route = require('express').Router();

route.get('/',(req,res)=>{
res.send("You are in home of user route");
});

route.post('/insert',(req,res)=>{
const data = req.body;
res.json(data);
});

route.get('/:name',(req,res)=>{
    let name = req.params.name;
    res.send(name);
});

module.exports = route;