const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app =express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/todo",{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>console.log("connected to data..."))
.catch(console.error);

const Todo = require("./model/modal");


app.get('/finding', async (req,res) => {
    const todos = await Todo.find();

    res.json(todos);
})

app.post('/neq', (req,res) => {
    const todon = new Todo({
        text: req.body.text

    });
    todon.save();

    res.json(todon);
})

app.delete('/deletei/:id', async (req,res)=>{
    console.log(req.params.id);
    const result = await Todo.findByIdAndDelete(req.params.id);
    

    res.json(result);
})

app.put('/update/:id', async (req,res) => {

    const updated = await Todo.findByIdAndUpdate(req.params.id,{text:req.body.text});

    res.json(updated);

})




app.listen(8000, ()=> console.log("server started..."));