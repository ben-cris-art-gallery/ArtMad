const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User= require('../models/user')
const cloudinaryConfig = require('../config/cloudinary.config')


router.get('/profile', (req, res) => {
  res.render('artist/artist-profile', { message: req.flash('error'), user:req.user});
})




module.exports = router