const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');
let photosArray=[];

//unspalsh API
const count=10;
const apiKey='O4SB1nQ1MHtLa9rZeFZyZavrqD43AJjVynDOimmv4Yk';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//creat element for links and photos,add to DOM
function displayPhotos(){
    photosArray.forEach((photo) => {
        //anchor element to lik to unaspalsh
        const item =document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        //create <img> for photo
        const img=document.createElement('img')
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.alt_description);
        //put <img> inside <a>,then put both inside image-contaianer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//retrieve photos from unspalsh API
async function getPhotos()
 {
    try{
        const response=await fetch(apiUrl);
        photosArray =await response.json();
       displayPhotos();
    
    }
    catch(error){

    }
}
getPhotos();
