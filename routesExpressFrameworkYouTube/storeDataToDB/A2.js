let route = require('express').Router();

const BlogModel = require('./A3')

route.post('/insert',async (req,res)=>{

        const blog = new BlogModel(req.body);
        let data = await blog.save();
        res.json(data);
    
});

module.exports = route;