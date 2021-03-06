const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const UserSchema = Schema({
  username: String,
  password: String,
  email:    String,
  description: String,
  role: {
    type: String,
    enum : [ 'ARTIST', 'GALLERY'],
    default : 'ARTIST'
  },
  content:[{type: Schema.Types.ObjectId, ref: 'User'}],
  artworks:[{type: Schema.Types.ObjectId, ref: 'Artwork'}],
  imgName: String,
  imgPath: String,
  genre:[ {type: String, enum : ['pintura', 'escultura', 'fotografia', 'instalacion'],
  default : 'pintura'}],
  location: {
    type: { type: String },
    coordinates: [Number]
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
