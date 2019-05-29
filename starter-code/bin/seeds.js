require('dotenv').config()

const mongoose = require('mongoose');
const Artwork = require('../models/artwork');
const User = require('../models/user');

//const dbName = 'MAD-ART'
mongoose.connect(`mongodb://localhost/${process.env.DB}`)

User.collection.deleteMany()
Artwork.collection.deleteMany()

const users = [
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    genre: 'escultura',
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    genre: 'fotografia',
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
  {
    username: "James Watts",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "ARTIST",
    email:    'jameswatts@gmail.com',
    content:[],
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965398/artmad/1533903041_650831_1533903471_noticia_normal_wfe0au.jpg",
    genre: 'escultura',
    artworks: [],
  

  },
  {
    username: "Annely Juda Fine Art",
    password: "1234",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    role: "GALLERY",
    email:   'annely@gmail.com',
    content:[],
    imgName: "1533903041_650831_1533903471_noticia_normal_wfe0au",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965423/artmad/213_N89_rxuqxf.jpg",
    artworks: [],


  },
]

let artworks = [
  {
    title: 'The Weeping Woman', 
    author: 'James Watts', 
    gallery: "Annely Juda Fine Art",
    description: "The Weeping Woman is an oil on canvas painted by Pablo Picasso in France in 1937. Picasso was intrigued with the subject, and revisited the theme numerous times that year. ",
    dateCreated: "1937-10-26",  
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965340/artmad/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10_jflosp.jpg",
    },
  {
    title: 'The Weeping Woman', 
    author: 'James Watts', 
    gallery: "Annely Juda Fine Art",
    description: "The Weeping Woman is an oil on canvas painted by Pablo Picasso in France in 1937. Picasso was intrigued with the subject, and revisited the theme numerous times that year. ",
    dateCreated: "1937-10-26",  
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965340/artmad/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10_jflosp.jpg",
    },
  {
    title: 'The Weeping Woman', 
    author: 'James Watts', 
    gallery: "Annely Juda Fine Art",
    description: "The Weeping Woman is an oil on canvas painted by Pablo Picasso in France in 1937. Picasso was intrigued with the subject, and revisited the theme numerous times that year. ",
    dateCreated: "1937-10-26",  
    imgName: "213_N89_rxuqxf",
    imgPath: "https://res.cloudinary.com/dgesryvti/image/upload/v1558965340/artmad/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10_jflosp.jpg",
    },
 
]

User.create(users)
  .then(usersCreated => {
    console.log(usersCreated)
    const artUser = usersCreated.find( user => {
      return user.role == 'ARTIST' && user.username == 'James Watts'
    })
    const galleryUser = usersCreated.find( user => {
      return user.role == 'GALLERY' && user.username == 'Annely Juda Fine Art'
    })
    artworks = artworks.map(art => {
      art.author = artUser._id;
      art.gallery = galleryUser._id;
      return art
    })
    Artwork.create(artworks)
      .then(artworksCreated =>{
        console.log(artworksCreated)
        console.log(`Creados ${artworksCreated.length} artworks`)
        Promise.all(usersCreated.map(user => user.update({artworks:artworksCreated.map(art => art._id)})))
        .then(msg => {
          console.log(msg)
          mongoose.connection.close()
        })
      })
      .catch(err => console.log("Este es el error" + err))
    console.log(`Creados ${usersCreated.length} users`)
  })
  .catch(err => console.log("Este es el error" + err))

// User.create(users)
//   .then(usersCreated => {
//     console.log(usersCreated)
//     const artUser = usersCreated.find( user => {
//       return user.role == 'ARTIST' && user.username == 'James Watts'
//     })
//     const galleryUser = usersCreated.find( user => {
//       return user.role == 'GALLERY' && user.username == 'Annely Juda Fine Art'
//     })
//     artworks = artworks.map(art => {
//       art.author = artUser._id;
//       art.gallery = galleryUser._id;
//       return art
//     })
//     Artwork.create(artworks)
//       .then(artworksCreated =>{
//         console.log(artworksCreated)
//         console.log(`Creados ${artworksCreated.length} artworks`)
//         Promise.all(usersCreated.map(user => user.update({artworks:artworksCreated.map(art => art._id)})))
//         .then(msg => {
//           console.log(msg)
//           mongoose.connection.close()
//         })
//       })
//       .catch(err => console.log("Este es el error" + err))
//     console.log(`Creados ${usersCreated.length} users`)
//   })
//   .catch(err => console.log("Este es el error" + err))






