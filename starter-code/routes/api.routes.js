const express = require('express');
const router  = express.Router();
const User = require("../models/user")


router.get('/', (req, res, next)=>{
  User.find() 
  .then(users => res.json(users))
  .catch(error => console.log(error))

})

router.get('/:id', (req, res, next) =>{
User.findById(req.params.id)
.then(user => res.json(user))
.catch(error => console.log(error))

})

router.get('/role/:role', (req, res, next) =>{
User.find({ role:req.params.role })
.then((user) => {
  console.log(req.params.role)
  res.json(user)

  })
.catch(error => console.log(error))

})

router.get('/role/:role', (req, res, next) =>{
User.find({ role:req.params.role })
.then((user) => {
  console.log(req.params.role)
  res.json(user)

  })
.catch(error => console.log(error))

})
 
module.exports = router