const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const artWorkSchema = Schema({
  title: String, 
  authorForGallery: String,
  author: {type: Schema.Types.ObjectId, ref: 'User'}, 
  gallery: {type: Schema.Types.ObjectId, ref: "User"},
  description: String,
  dateCreated: Date,  
  imgName: String,
  imgPath: String,
  genre: {type: String, enum : ['pintura', 'escultura', 'fotografía', 'instalación'],
  default : 'pintura'}
})

const Artwork = mongoose.model('Artwork', artWorkSchema)

module.exports = Artwork
