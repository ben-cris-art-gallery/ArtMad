const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User = require('../models/user')
const Artwork = require("../models/artwork")
const cloudinaryConfig = require('../config/cloudinary.config')

//LISTADO DE LOS GALERÍA

router.get('/list',(req, res)=>{
    User.find({role : 'GALLERY'})
      .then(gallery=>{
        res.render('gallery/gallery-list', {gallery})
      })
  })
  
  // //VISTA DE CADA GALERÍA
  
  // router.get('/detail/:gallery_id',(req,res)=>{
  //   User.find(req.params.user_id)
  //     .then(theGallery=>res.render('gallery/gallery-description', {gallery : theGallery}))
  //     .catch(error => console.log(error))
  // })

  router.get('/detail/:gallery_id',(req,res)=>{
    console.log(req.params.gallery_id)
    User.findById(req.params.gallery_id)
    .populate("artworks")
      .then((gallery) => {
        //let artworksIds = artist.artworks
          console.log("estos son los artworks ==>" + gallery.artworks)
          //let thisArtist = artist.find(thisArtist => thisArtist._id == req.params.artist_id)
          //console.log(`Este es el artist ${thisArtist}`)
          res.render('gallery/gallery-description', {gallery, galleryJSON:JSON.stringify(gallery)})
        })
           .catch(error => console.log(error))
  })
  
module.exports = router


