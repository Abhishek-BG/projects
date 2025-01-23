const express = require('express')
const bodyParser  = require('body-parser'); //to read or parse the request body
const app = express()
const PORT  = 3000;
const BooksRouter = require('./routes/BooksRouter');
//middleware to parse the body of every request
app.use(bodyParser.json()); //top level //without this cannot read body

//routes
app.use('/books',BooksRouter)
app.listen(PORT, () => {console.log("SERVER LIVE")});