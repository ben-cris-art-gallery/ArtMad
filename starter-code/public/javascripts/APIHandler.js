class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullListArtists () {
    return axios.get(`${this.BASE_URL}/role/ARTIST`)
      .then(allUsers=>allUsers.data)
  }
  
  getFullListArtistsGenre (genre) {
    return axios.get(`${this.BASE_URL}/genre/${genre}?role=ARTIST`)
    .then(allUsers=>allUsers.data)
  }
  
  getFullListGalleries () {
    return axios.get(`${this.BASE_URL}/role/GALLERY`)
    .then(allUsers=>allUsers.data)
  }
  
  getFullListGalleriesGenre (genre) {
    return axios.get(`${this.BASE_URL}/genre/${genre}?role=GALLERY`)
    .then(allUsers=>allUsers.data)
  }
  
  getFullListArtworks () {
    return axios.get(`${this.BASE_URL}/artworks`)
      .then(allArtworks=>allArtworks.data)
  }
  getFullListArtworksGenre (genre) {
    return axios.get(`${this.BASE_URL}/artworks/genre/${genre}`)
    .then(allUsers=>allUsers.data)
  }
 

  
  
  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(theCharacter=>{
      console.log(theCharacter.data)
      return theCharacter.data
      
    })
  }

  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister (id, updateChar) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, updateChar)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`, id)
  }
}
