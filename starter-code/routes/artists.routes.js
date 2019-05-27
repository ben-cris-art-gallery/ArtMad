const express = require('express')
const router  = express.Router()
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

const cloudinaryConfig = require('../config/cloudinary.config')


router.get('artist/artist-profile', ensureLoggedOut(), (req, res) => {
  res.render('../views/artist/artist-profile', { message: req.flash('error')});
});



///module.exports = router
