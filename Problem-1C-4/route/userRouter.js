//create a router which routes my requests 
const express = require('express');
const router = express.Router();

//get  / this means same endpoint
router.get('/',(req,res)=>{
    try{
        console.log("GET REQUEST from the API endpoint")
        res.status(200);
        res.send("Welcome to the API endpoint")
        
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
//post
router.post('/',(req,res)=>{
    try{
        console.log("POST REQUEST from the API endpoint")
        console.log(`Parsed the Payload: ${req.method} ${req.url} `)
        res.status(201).json({message:`Data Added`})
        
    }catch(err){
        res.status(500).json({message:err.message});
    }
})

module.exports = router;