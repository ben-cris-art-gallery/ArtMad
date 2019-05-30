const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const Artwork = require('../models/artwork')
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
  console.log(req.params.user_id)
  User.findById(req.params.artist_id)
  .populate("artworks")
    .then((artist) => {
      //let artworksIds = artist.artworks
        console.log("estos son los artworks ==>" + artist.artworks)
        //let thisArtist = artist.find(thisArtist => thisArtist._id == req.params.artist_id)
        //console.log(`Este es el artist ${thisArtist}`)
        res.render('artist/artist-description', {artist})
      })
         .catch(error => console.log(error))
 })





module.exports = router


