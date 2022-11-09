//Pokemon calling ID
let pokemon=null;
let pokemonImg= document.getElementById("pokemon-image")
let pokemonName= document.getElementById("pokemon-name")
let pokemonInfo= document.getElementById("pokemon-info")
let pokemonShiny=document.getElementById("pokemon-shiny")
const searchBox = document.getElementById("searchBox")
const button = document.getElementById("submit")



button.addEventListener("click",(e)=>{
    id= searchBox.value
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{
    method: "GET"
}).then(res=>res.json().then(data=>{pokemon=data
    pokemon=data
    pokemonImg.setAttribute("src",pokemon.sprites.front_default)
    pokemonShiny.setAttribute("src",pokemon.sprites.front_shiny)
    pokemonName.innerText = pokemon.name
    pokemonInfo.innerHTML = `<span id="height">Height: ${pokemon.height} </span> <span id="weight">Weight: ${pokemon.weight} </span>`
    

    // console.log(pokemon)
    // document.getElementById("pokemon").innerText=(pokemon.species.name);
    // imagen.innerHTML="<img src"+'(pokemon.sprites.back_default)'

}))
})
// let imagen=document.getElementById("image")
// console.log("im calling pokemon API")







// Promise(console.log("HI")).then(()=>console.log("Waiting")).catch(()=>console.log("ready"))



