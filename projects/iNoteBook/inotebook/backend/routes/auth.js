const express = require('express');
const User = require('../models/User');
const router = express.Router()
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const JWT_SECRET = "deepisserene"
router.post('/createuser', [
  body('name', 'please enter a valid human name!').isLength({ min: 3 }),
  body('email', 'please enter a valid genuine email').isEmail(),
  body('password', 'password must be atleast >5 ').isLength({ min: 5 }),

], async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  try {

    let user = await User.findOne({ email: req.body.email })
    if (user) {
      return res.status(400).json({ error: "User already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
      // }).then((user)=>{res.json(user)})
      // .catch((err)=>{res.json({error:"Please enter a valid credentials"})})
      // res.send(req.body)
    })
    const data = {
      id: user.id,
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    res.json({ success: "User created" , authToken })
  } catch {
    (error) => {
      console.log(error.message)
      res.status(500).send("Some error occured!")
    }
  }


})
module.exports = router;

