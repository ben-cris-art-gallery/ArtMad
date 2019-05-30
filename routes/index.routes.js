const express = require('express');
const router  = express.Router();
const User = require("../models/user")
const ArtWork = require("../models/artwork")
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {user : req.user});
});

router.get("/buscador", (req, res, next) => {
  const {buscaBenGandul} = req.query;
  
  User.find({$or:[{ "username": { "$regex": buscaBenGandul, "$options": "i" } },{ "genre": { "$regex": buscaBenGandul, "$options": "i" } } ]})
  .then(users => {
    ArtWork.find({$or:[
      { "title": { "$regex": buscaBenGandul, "$options": "i" } },
      { "genre": { "$regex": buscaBenGandul, "$options": "i" } } 
    ]})
    .then(arts => {
      console.log(users);
      console.log(arts);
      res.render("buscador", {users, arts});
    })
  })
})

router.get('/api', (req, res, next)=>{
  User.find() 
  .then(users => res.json(users))
  .catch(error => console.log(error))

})

router.get('/api/:id', (req, res, next) =>{
User.findById(req.params.id)
.then(user => res.json(user))
.catch(error => console.log(error))

})

router.get('/api/artist/:role', (req, res, next) =>{
User.findById(req.params.role)
.then((user) => {
  console.log(req.params.role)
  res.json(user)

  })
.catch(error => console.log(error))

})
 






module.exports = router;
