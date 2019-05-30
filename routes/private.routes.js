const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User= require('../models/user')
const cloudinaryConfig = require('../config/cloudinary.config')
const Artwork = require('../models/artwork')

//VIEW AND EDIT PROFILE

router.get('/profile', ensureLoggedIn('/login'), (req, res) => {
  let isGallery = false
  if(req.user.role == "GALLERY")isGallery = true
      res.render('profile', { message: req.flash('error'), user:req.user, isGallery});
})

router.post('/edit/:user_id',cloudinaryConfig.single('photo'),(req, res)=>{
  const update = {username, email, description}= req.body
  
   
  if(req.file){
    update.imgPath = req.file.url
    update.imgName = req.file.originalname
  }
  
  if(req.body.longitude||req.body.latitude){
    update.location = {
      type: 'Point',
      coordinates: [req.body.longitude, req.body.latitude]
    }
  }

  User.findByIdAndUpdate(req.params.user_id, update, {new: true})
    .then(() =>{
      console.log(req.body)
      res.redirect('/private/profile')
    } )
    .catch(error => next(error))

})

//VIEW ARTWORKS AND CONTENT

router.get('/arts', ensureLoggedIn('/login'), (req, res)=>{
  User.findById(req.user._id)
  .populate('artworks')
  .then(user =>{
    let isGallery = false
    if(req.user.role == "GALLERY")isGallery = true
    res.render('profile-content', { user, isGallery })
  })
  .catch(error => console.log(error))  
})

//ADD ARTWORKS

router.post('/arts/new', cloudinaryConfig.single('photo'), (req, res)=>{
  let {title, description, dateCreated, genre}= req.body
  const imgName = req.file.originalname
  const imgPath = req.file.url

  let author
  let gallery
  let authorForGallery
  //CHEQUEAR ROLES!!!!
  if(req.user.role== 'ARTIST'){
    author = req.user._id
    gallery =undefined
    authorForGallery= undefined
  }
  if(req.user.role== 'GALLERY'){
    gallery = req.user._id
    author=undefined
    authorForGallery=req.body.authorForGallery
  }

  
  const newArt= new Artwork ({title, description, dateCreated, imgName, imgPath, genre, author, gallery, authorForGallery})
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


//EDITAR OBRA

module.exports = router