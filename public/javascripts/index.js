

const usersAPI = new APIHandler('/api')

//artist container setup
const userContainer= document.querySelector('.artist-list')
// inputs
const fotografiaInput = document.querySelector("#fotografia")
const pinturaInput = document.querySelector("#pintura")
const ilustracionInput = document.querySelector("#ilustracion")
const collageInput = document.querySelector("#collage")
const instalacionInput = document.querySelector("#instalacion")
const esculturaInput = document.querySelector("#escultura")



// Se cargan todos

usersAPI.getFullListArtists()
      
.then(allUsers=>{
        
  userContainer.innerHTML=" "
        
  allUsers.forEach(user => {

        const mediumDiv = document.createElement('div')
              
        mediumDiv.setAttribute('class', 'user-info')

        let description = document.createElement('div')
        description.setAttribute('class', 'descripion-info')
        description.innerHTML = `<p>${user.genre}</p>`
        mediumDiv.appendChild(description) 

        let name = document.createElement('div')
        name.setAttribute('class', 'name-link')
            
        name.innerHTML = `<a href="/artist/detail/${user._id}">${user.username}</a>`
            
        mediumDiv.appendChild(name) 
        

        let profileImg = document.createElement('div')
        profileImg.innerHTML = `<a href="/artist/detail/${user._id}"><img src="${user.imgPath}" alt=""></a>`
        //profileImg.setAttribute('src', `${user.imgPath}`)
        mediumDiv.appendChild(profileImg) 

     
        
       
        userContainer.appendChild(mediumDiv)  
  });

})

const paintSelection = (allUsers) =>{
  allUsers.forEach(user => { 
    const mediumDiv = document.createElement('div')  
    mediumDiv.setAttribute('class', 'user-info')

    let description = document.createElement('div')
    description.setAttribute('class', 'descripion-info')
    description.innerHTML = `<p>${user.genre}</p>`
    mediumDiv.appendChild(description) 
    userContainer.appendChild(mediumDiv)  

    let name = document.createElement('div')  
    name.setAttribute('class', 'name-link')
    name.innerHTML = `<a href="/artist/detail/${user._id}">${user.username}</a>`  
    mediumDiv.appendChild(name) 


    let profileImg = document.createElement('div')
    profileImg.innerHTML = `<a href="/artist/detail/${user._id}"><img src="${user.imgPath}" alt=""></a>`
    //profileImg.setAttribute('src', `${user.imgPath}`)
    mediumDiv.appendChild(profileImg) 
    
    
});
}
  
/// fotografía

fotografiaInput.onclick = ()=>{
  userContainer.innerHTML=" "
  usersAPI.getFullListArtistsGenre ("fotografia")

  .then(allUsers=>{
        
    userContainer.innerHTML=" "
            
    paintSelection(allUsers)
  
  }) 
}

/// pintura

pinturaInput.onclick = ()=>{
  userContainer.innerHTML=" "
  usersAPI.getFullListArtistsGenre ("pintura")

  .then(allUsers=>{
        
    userContainer.innerHTML=" "
            
    paintSelection(allUsers)
  
  }) 
}

/// escultura

esculturaInput.onclick = ()=>{
  userContainer.innerHTML=" "
  usersAPI.getFullListArtistsGenre ("escultura")

  .then(allUsers=>{
        
    userContainer.innerHTML=" "
            
    paintSelection(allUsers)
  
  }) 
}
/// instalacion

instalacionInput.onclick = ()=>{
  userContainer.innerHTML=" "
  usersAPI.getFullListArtistsGenre ("instalacion")

  .then(allUsers=>{
        
    userContainer.innerHTML=" "
            
    paintSelection(allUsers)
  
  }) 
}
/// collage

collageInput.onclick = ()=>{
  userContainer.innerHTML=" "
  usersAPI.getFullListArtistsGenre ("collage")

  .then(allUsers=>{
        
    userContainer.innerHTML=" "
            
    paintSelection(allUsers)
  
  }) 
}
/// ilustracion

ilustracionInput.onclick = ()=>{
  userContainer.innerHTML=" "
  usersAPI.getFullListArtistsGenre ("ilustracion")

  .then(allUsers=>{
        
    userContainer.innerHTML=" "
            
    paintSelection(allUsers)
  
  }) 
}
 
