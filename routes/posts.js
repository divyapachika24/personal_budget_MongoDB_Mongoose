const express = require('express');
const router = express.Router();
//const Post = require('../models/expenses_schema.js');
const expenses_schema = require('../models/expenses_schema.js');


// GETS ALL THE DATA FROM DATABASE
router.get('/', async (req,res) => {
    try{
       const posts = await expenses_schema.find();
       res.json(posts);
    }catch(err){
        res.json({message:err});
    }
    
});

//POSTS DATA TO DATABASE
router.post('/', async (req,res) => {
   const post = new expenses_schema({
          title: req.body.title,
          budget: req.body.budget,
          color: req.body.color
   });
   try {
       const savedPost = await post.save();
       res.json(savedPost)
   } catch(err) {
       res.json({message: err });
   }
       
});


module.exports = router;