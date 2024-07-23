const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');
router.post('/',[
    body('name', 'please enter a valid human name!').isLength({min: 3}),
    body('email' , 'please enter a valid genuine email').isEmail(),
    body('password' , 'password must be atleast >5 ').isLength({min: 5}),
    
], (req, res) => {
  const error = validationResult(req);
  if(!error.isEmpty()){
    return res.status(400).json({error: error.array()});
  }
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then((user)=>{res.json(user)})
  .catch((err)=>{res.json({error:"Please enter a valid credentials"})})
    // res.send(req.body)
})

module.exports = router;

