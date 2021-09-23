const container = document.querySelector('#home-page')
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
var j = (Math.floor(Math.random() * 150)) + 1
const pokemon = document.createElement('div')
const newImg = document.createElement('img')
newImg.src = `${baseURL}/${j}.png`
pokemon.appendChild(newImg)
container.appendChild(pokemon)
pokemon.classList.add('pokemon')


/*
<div>
    <img>
    <span>2</span>
</div>
*/