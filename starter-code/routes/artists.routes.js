const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User= require('../models/user')
const cloudinaryConfig = require('../config/cloudinary.config')


//LISTADO DE LOS ARTISTAS

router.get('/list',(req, res)=>{
  User.find({role : 'ARTIST'})
    .then(artist=>{
      res.render('artist/artist-list', {artist})
    })
})

//VISTA DE CADA ARTISTA

router.get('/detail/:artist_id',(req,res)=>{
  User.find(req.params.user_id)
    .then(theArtist=>res.render('artist/artist-description', {artist : theArtist}))
    .catch(error => console.log(error))
})





module.exports = router


