let express = require('express');
let app = express();
app.use(express.json());

app.post('/blog/insert',(req,res)=>{
const data = req.body;
res.send(data);
});

app.get('/blog/:name',(req,res)=>{
   const name = req.params.name;
   res.send(name);
});

app.listen(6000);