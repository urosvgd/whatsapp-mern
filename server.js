// importing
const express = require('express');
const mongoose = require ('mongoose');
const Messages = require('./models/dbMessages');


const MongoUrl = "";
// app config
const app = express();
const port = process.env.PORT || 9000;
// middlewares

// DB Config
mongoose.connect(MongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successful connection to DB")
}).catch(error => {
    console.log(error)
});


// 

// Api routes
app.get("/", (req, res) => {
    res.status(200).send("Hello World")
})

app.post('/api/v1/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (error, data) => {
        if (error) {
            res.status(500).send(err)
        } else {
            res.status(201).send(`New message created: \n ${data}`)
        }
    })
});

// listener

app.listen(port, () => console.log(`Listening on port: ${port}`))
