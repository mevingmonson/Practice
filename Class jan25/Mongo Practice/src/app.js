const express = require('express');
const app = express();
const Book = require('./models/Book');
const User = require('./models/User');
const mongoose = require("mongoose");

app.use(express.json());

mongoose.connect(
    "mongodb+srv://crampete:crampete123@cluster0-jalxg.mongodb.net/library?retryWrites=true&w=majority", { useNewUrlParser: true }
);

app.get("/book", (req, res) => { });
app.get("/user", (req, res) => { });

app.post("/book", (req, res) => {
    //storing the json body in a variable
    var incomingdata = req.body;
    //creating a new Book Object
    var a = new Book(incomingdata);
    a.save(function (err, book) {
        if (err) {
            console.log(err);
            res.status(400);
            return res.send({ state: "Fail" });
        }

        return res.send({ state: "sucess" });
    });
});


app.listen(3000, () => {
    console.log("Server started");
});