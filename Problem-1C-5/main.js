const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Myrouter = require('./routes/myRouter')
//npm i ejs express mongoose body-parser
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); //render the static files
app.set('view engine','ejs');//express js files
//mongdb connection  on demand creation
mongoose.connect('mongodb://localhost:27017/problem1c5',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{console.log('Connected to Mongodb')})
    .catch((err)=>console.log(err))

app.use('/',Myrouter); //router
app.listen(3000,()=>{console.log('Server connected')});