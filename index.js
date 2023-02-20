const btnEL = document.getElementById("btn");
const animeConEL  = document.querySelector(".animeContainer"); 
const animeimgEL = document.querySelector(".Anime-img");
const animeNameEL = document.querySelector(".animename")

btnEL.addEventListener("click",async  function(){
    try {
        btnEL.disabled = true;
        btnEL.innerText= "Loading ..."
        animeNameEL.innerText="Updating . .. "
        animeimgEL.src = "loading.svg";
        const resp = await fetch("https://api.catboys.com/img");
        const data = await resp.json()
        console.log(data);
        btnEL.disabled = false;
        btnEL.innerText= "Get an anime Picture "

        animeConEL.style.display="block";
        animeimgEL.src = data.url;
        animeNameEL.innerText = data.artist; 
    } catch (error) {
        
        console.log(error);
        animeNameEL.innerText="An error happend please try again !"
        btnEL.disabled = false;
        btnEL.innerText= "Try Again"
    
    }
})