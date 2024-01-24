const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Todo = require('./models/Todo');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://booking:booking123@cluster0.ieapskx.mongodb.net/")
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

app.get('/todos', async (req,res) => {
    const todos = await Todo.find();

    res.json(todos);
});

app.post('/todo/new',  (req,res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save();
    res.json(todo);
});

app.delete('/todo/delete/:_id', async (req,res) => {
        const result = await Todo.findByIdAndDelete(req.params._id);
        res.json(result);
});

app.put('/todo/complete/:_id', async (req,res) => {
    const todo = await Todo.findById(req.params._id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});

app.listen(3001, () => console.log("Server has started on port 3001"));