const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

// 'use strict';
app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static('public'));


// let rawdata = fs.readFileSync('fetchdata.json');
// let budget = JSON.parse(rawdata);
// console.log(budget);

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);
app.use('/budget', postsRoute);

//connect to DB
let url = 'mongodb://localhost:27017/mongo_pb';
mongoose.connect(url,  { useNewUrlParser: true, useUnifiedTopology: true}, () =>
   console.log('connected to DB')
);




app.get('/hello', (req,res) =>{
    res.send('Hello World!');
});

// app.get('/budget', (req,res) =>{
//     res.json(budget);
// })

app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`)
});

