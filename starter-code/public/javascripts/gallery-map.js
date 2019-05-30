window.onload=()=>{
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: {
            lat: coor.coordinates[0],
            lng: coor.coordinates[1]
        }
        
    })
    getMarker(map)
}



const getMarker=(myMap)=>{

    const location={
        lat: coor.coordinates[0],
        lng: coor.coordinates[1]
    }
    new google.maps.Marker({
        position: location,
        map: myMap,
        title: username
    }) 
}