const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const Artwork = require('../models/artwork')
const User= require('../models/user')
const cloudinaryConfig = require('../config/cloudinary.config')


//LISTADO DE LOS ARTISTAS

router.get('/list',(req, res)=>{
  Artwork.find()
    .then(artworks=>{
      res.render('artwork/artwork-list', {artworks})
    })
})

//VISTA DE CADA ARTISTA

router.get('/detail/:artwork_id',(req,res)=>{
  console.log(req.params.artwork_id)
  Artwork.findById(req.params.artwork_id)
    .then(theArtwork=>{
      User.findById(theArtwork.author)
        .then(
          theAuthor=>{  
            res.render('artwork/artwork-detail', {theArtwork, user :req.user, theAuthor})
          })
    })
    .catch(error => console.log(error))
})





module.exports = router


