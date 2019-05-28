const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User= require('../models/user')
const cloudinaryConfig = require('../config/cloudinary.config')

//LISTADO DE LOS GALERÍA

router.get('/list',(req, res)=>{
    User.find({role : 'GALLERY'})
      .then(gallery=>{
        res.render('gallery/gallery-list', {gallery})
      })
  })
  
  //VISTA DE CADA GALERÍA
  
  router.get('/detail/:gallery_id',(req,res)=>{
    User.find(req.params.user_id)
      .then(theGallery=>res.render('gallery/gallery-description', {gallery : theGallery}))
      .catch(error => console.log(error))
  })


module.exports = router
