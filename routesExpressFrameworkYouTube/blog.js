let route = require('express').Router();

route.get('/',(req,res)=>{
res.send("You are in home of blog route");
});

route.get('/:id',(req,res)=>{
let id = req.params.id;
res.send(id);
});

const BlogModel = require('../Model/blog')
route.post('/insert', async (req,res)=>{

        const blog = new BlogModel(req.body);
        let data = await blog.save();
        res.json(data);
    
});

module.exports = route;