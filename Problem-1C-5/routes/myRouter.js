const express = require('express');
const router = express.Router();
const Item = require('../models/items') //imported the schema 
//create
router.get('/create', (req, res) => {
    res.render('create')
})
router.post('/create', async (req, res) => {
    const {name,select}= req.body;
    const boolValue =  select==="False"?false:true
    const newTask = new Item({name,status:boolValue}); //new object for my model
    await newTask.save(); //save to database
    res.redirect('/'); //internal function 
})
//read all items
router.get('/',async (req, res) => {
    const items = await Item.find(); //find all the doc in Collection
    res.render('index',{items})
})
//update 
router.get('/update/:id', async(req, res) => {
    const item = await Item.findById(req.params.id)
    res.render('update',{item});
})
router.post('/update/:id', async(req, res) => {
    const id = req.params.id
    const {select}= req.body;
    const boolValue = select==="False"?false:true
    await Item.findByIdAndUpdate(id,{status:boolValue});
    res.redirect('/');
})
//delete
router.post('/delete/:id', async(req, res) => {
    const id = req.params.id
    await Item.findByIdAndDelete(id);
    // res.status(200).json({message:"deleted"});
    setTimeout(()=>{res.redirect('/')},1000);
})


module.exports=router