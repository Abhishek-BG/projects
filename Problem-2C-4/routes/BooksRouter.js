const express = require('express')
const router = express.Router();
let {books,nextId} = require('../memory');//in-memory from the file
router.post('/',(req,res)=>{
    try{
    const {title,author,year} = req.body;
    if(!title || !author || !year){
        return res.status(400).json({message:"Please fill all fields"});
    }
     books.push({id:nextId++, title,author,year});
    res.status(201).json({message:`Book ${title} Created`});
    }catch(err){
        res.status(500).json({message:err.message});
    }
})
router.get('/',(req,res)=>{
    res.status(200).json(books);
})
router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const {year} = req.body;
    const book = books.find(book => book.id ===parseInt(id));
    book.year =year;
    if(!book){
        return res.status(404).json({message:`Book with id ${id} not found`});
    }
    res.status(200).json(book);
})
router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const book = books.find(book => book.id ===parseInt(id));
    if(!book){
        return res.status(404).json({message:`Book with id ${id} not found`});
    }
    res.status(200).json({message:"Book deleted"});
})
module.exports =router;