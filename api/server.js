const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://booking:booking123@cluster0.ieapskx.mongodb.net/")
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

app.listen(3001, () => console.log("Server has started on port 3001"));