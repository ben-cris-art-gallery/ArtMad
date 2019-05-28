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
  let {username, email, description}= req.body
  const imgPath = req.file.url
  const imgName = req.file.originalname
  
  User.findByIdAndUpdate(req.params.user_id, {username, email, description, imgPath, imgName}, {new: true})
    .then(() => res.redirect('/private/profile'))
    .catch(error => next(error))
})

//VIEW ARWORKS AND CONTENT

router.get('/arts', ensureLoggedIn('/login'), (req, res)=>{
  res.render('profile-content', {user:req.user})
})

router.post('/arts/:user_id', cloudinaryConfig.single('photo'), (req, res)=>{
  let {description, dateCreated}= req.body
  const imgName = req.file.originalname
  const imgPath = req.file.url

  const newArt= new Artwork ({decription, dateCreated, imgName, imgPath})
  newArt.save()
    .then()

})

module.exports = router