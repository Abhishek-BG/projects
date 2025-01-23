const express = require('express'); //framework
const app = express(); //create an instance of the framework 
//app variable is express app
const router = require('./route/userRouter')

app.use('/api',router); //middleware will intercept and send to router

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})