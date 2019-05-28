const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User= require('../models/user')
const cloudinaryConfig = require('../config/cloudinary.config')
const Artwork = require('../models/artwork')

//VIEW AND EDIT PROFILE

router.get('/profile', ensureLoggedIn('/login'), (req, res) => {
  res.render('profile', { message: req.flash('error'), user:req.user});
})

router.post('/edit/:user_id',cloudinaryConfig.single('photo'),(req, res)=>{
  const update = {username, email, description}= req.body

  if(req.file){
    update.imgPath = req.file.url
    update.imgName = req.file.originalname

  }
  
  User.findByIdAndUpdate(req.params.user_id, update, {new: true})
    .then(() =>{
      res.redirect('/private/profile')
    } )
    .catch(error => next(error))

})

//VIEW ARWORKS AND CONTENT

router.get('/arts', ensureLoggedIn('/login'), (req, res)=>{
  User.findById(req.user._id)
  .populate('artworks')
  .then(user =>{
    res.render('profile-content', { user })
  })
  .catch(error => console.log(error))  
})

router.post('/arts/new', cloudinaryConfig.single('photo'), (req, res)=>{
  let {title, description, dateCreated}= req.body
  const imgName = req.file.originalname
  const imgPath = req.file.url
  const author = req.user._id
  const newArt= new Artwork ({title, description, dateCreated, imgName, imgPath, author})
  newArt.save()
    .then(art=>{
      User.findByIdAndUpdate(req.user._id, {$push:{artworks: art._id}})
        .then(artist=>{
          res.redirect('/private/arts')
        })
        .catch(err=>{console.log(err)})
    })
    .catch(error => console.log(error))

})

module.exports = router