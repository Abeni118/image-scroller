const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');
let ready=false;
let imagesLoaded=0;
let totalImages=0;
let photosArray=[];

//unspalsh API
const count=30;
const apiKey='O4SB1nQ1MHtLa9rZeFZyZavrqD43AJjVynDOimmv4Yk';
const apiUrl =`https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
function imageLoaded(){

    imagesLoaded++;
        console.log(imageLoaded);
    if(imagesLoaded==totalImages){
       ready=true;
       loader.hidden=true;
       console.log('ready=',ready);

    }
}
//creat element for links and photos,add to DOM
function displayPhotos(){
    imagesLoaded=0;
    totalImages=photosArray.length;
    console.log('totalImages',totalImages)

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
        img.addEventListener('load',imageLoaded)

        //put <img> inside <a>,then put both inside image-contaianer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//get photos from unspalsh API
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
// check to see if scroling near booto of page,load more photos
window.addEventListener('scroll',()=> {
    if(window.innerHeight+window.scrollY>= document.body.offsetHeight-1000&& ready){
        ready=false;
       getPhotos(); 
       console.log('load more');
    }
})
getPhotos();
