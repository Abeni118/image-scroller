//unspalsh API
const count=10;
const apikey='API_KEY';

const apiurl ='https://api.unsplash.com/photos/random/?client_id=YOUR_ACCESS_KEY&count_id=${apikey}&count=${count}';

async function getphotos(apiurl);
 {
    try{
        const response=await fetch(apiurl);
        const data =await response.json();
        console.log(data);
    
    }
    catch(error){

    }
}
getphotos();
