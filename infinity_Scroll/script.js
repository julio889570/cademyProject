const imageContainer = document.getElementById('image-container');
const loader = document. getElementById('loader');
let photosArray = [];


// unsplash API
const count = 10;
const apiKey = 'e7PJOlk6eaM7l7yW_VSHYj_kBAZmTT55sY4PjV90dpo';
 const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Creat Elements for links & photos, add to DOM
function displayPhotos(){
    photosArray.forEach((photo)=>{
        
    })
}
// Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        
    }catch(error){

    }
}

//On Load
getPhotos()