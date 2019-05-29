

const usersAPI = new APIHandler('http://localhost:3000/api')

 const userContainer= document.querySelector('.artist-list')
// const charactersInfo= document.querySelector('.character-info')      
// const charactersInput= document.querySelectorAll('#new-character-form input')
// const editCharacters= document.querySelectorAll('#edit-character-form input')
const artistInput = document.querySelector("#artista")
const galleryInput = document.querySelector("#galeria")

// const profileImg = document.createElement('img')
// profileImg.setAttribute('src',)

    
   
      usersAPI.getFullListArtists()
      
      .then(allUsers=>{
        
        userContainer.innerHTML=" "
        
        allUsers.forEach(user => {




          const mediumDiv = document.createElement('div')
          
          mediumDiv.setAttribute('class', 'user-info')
          let name = document.createElement('div')
          name.innerHTML = `<p>${user.username}</p>`
          mediumDiv.appendChild(name) 

          let profileImg = document.createElement('img')
          profileImg.setAttribute('src', `${user.imgPath}`)
          mediumDiv.appendChild(profileImg) 

          let description = document.createElement('div')
          description.innerHTML = `<p>${user.description}</p>`
          mediumDiv.appendChild(description) 
    
          
          // for(let key in user){
          
          //   const miniDiv= document.createElement('div')
       
          //     miniDiv.setAttribute('class', `${key}`)
          //     miniDiv.innerHTML= `<h3>${key}: ${user[key]}</h3>`
          //     mediumDiv.appendChild(miniDiv)
          // }
        userContainer.appendChild(mediumDiv)  
        });

      })
  


  // //LISTADO DE TODOS

  // document.getElementById('fetch-all').onclick = function(){
  //   charactersAPI.getFullList()
      
  //     .then(allCharacters=>{

  //       charactersContainer.innerHTML=" "
        
  //       allCharacters.forEach(character => {
          
  //         const mediumDiv = document.createElement('div')
          
  //         mediumDiv.setAttribute('class', 'character-info')
          
  //         for(let key in character){
          
  //           const miniDiv= document.createElement('div')
  //             miniDiv.setAttribute('class', `${key}`)
  //             miniDiv.innerHTML= `<h3>${key}: ${character[key]}</h3>`
  //             mediumDiv.appendChild(miniDiv)
  //         }
  //       charactersContainer.appendChild(mediumDiv)  
  //       });

  //     })
  // }
  

  // //MOSTRAR UNO

  // document.getElementById('fetch-one').onclick = function(){
    
  //   const idChar = document.querySelector('.operation input').value

    
  //   charactersAPI.getOneRegister(idChar)
  //     .then(theCharacter=>{
  //       charactersContainer.innerHTML=" "
  //       const mediumDiv = document.createElement('div')
          
  //       mediumDiv.setAttribute('class', 'character-info')
  //       for(let key in theCharacter){
          
  //         const miniDiv= document.createElement('div')
  //           miniDiv.setAttribute('class', `${key}`)
  //           miniDiv.innerHTML= `<h3>${key}: ${theCharacter[key]}</h3>`
  //           mediumDiv.appendChild(miniDiv)
  //       }
  //     charactersContainer.appendChild(mediumDiv) 
  //       })
        
         

  // }
  


  // //BORRAR

  // document.getElementById('delete-one').onclick = function(){

  //   const idChar = document.querySelector('.operation-delete input').value

  //   charactersAPI.deleteOneRegister(idChar)
  //     .then(x=>{
  //       charactersContainer.innerHTML=`Tu minion con id ${idChar} ha sido borrado`
  //     })


  // }
  

  // //EDITAR

  // document.getElementById('edit-character-form').onsubmit = e => {

  //   e.preventDefault() 

  // const id=editCharacters[0].value

  //   const updateCharacter={      
  //     name: editCharacters[1].value,
  //     occupation:editCharacters[2].value,
  //     weapon:editCharacters[3].value,
  //     cartoon:editCharacters[4].checked        //input tipo checkbox 
  //   }
  //   charactersAPI.updateOneRegister (id, updateCharacter)
  //    .then(x=>{
  //      charactersContainer.innerHTML=`Actualizado el minion`
  //      editCharacters[0].value=''       
  //      editCharacters[1].value=''
  //      editCharacters[2].value=''
  //      editCharacters[3].value=''
  //      editCharacters[4].checked = false
  //     })
            
  // }
  

  // //NUEVO

  // document.getElementById('new-character-form').onsubmit = e => {

  //   e.preventDefault() 

  //   const character={
  //     name: charactersInput[0].value,
  //     occupation:charactersInput[1].value,
  //     weapon:charactersInput[2].value,
  //     cartoon:charactersInput[3].checked        //input tipo checkbox
      
  //   }
  //   charactersAPI.createOneRegister (character)             
  //   .then(x=>{
  //     charactersContainer.innerHTML=`Creado tu nuevo minion`
  //     charactersInput[0].value=''
  //     charactersInput[1].value=''
  //     charactersInput[2].value=''
  //     charactersInput[3].checked=false
  //   })
      
  // }
