

const usersAPI = new APIHandler('http://localhost:3000/api')

 const userContainer= document.querySelector('.artist-list')

const fotografiaInput = document.querySelector("#fotografia")
const pinturaInput = document.querySelector("#pintura")



  fotografiaInput.onclick = ()=>{
    userContainer.innerHTML=" "
    usersAPI.getFullListArtistsGenre ("fotografia")

  }
   
usersAPI.getFullListArtists()
      
.then(allUsers=>{
        
  userContainer.innerHTML=" "
        
  allUsers.forEach(user => {

        const mediumDiv = document.createElement('div')
              
        mediumDiv.setAttribute('class', 'user-info')

        let name = document.createElement('div')
            
        name.innerHTML = `<a href="http://localhost:3000/artist/detail/${user._id}">${user.username}</a>`
            
        mediumDiv.appendChild(name) 

        let profileImg = document.createElement('img')
        profileImg.setAttribute('src', `${user.imgPath}`)
        mediumDiv.appendChild(profileImg) 

        let description = document.createElement('div')
        description.setAttribute('class', 'descripion-info')
        description.innerHTML = `<p>${user.description}</p>`
        
        mediumDiv.appendChild(description) 
        userContainer.appendChild(mediumDiv)  
  });

})
  

