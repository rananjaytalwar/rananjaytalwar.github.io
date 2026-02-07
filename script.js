document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#home-page')
    const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
    
    // random pokemon index
    let j = (Math.floor(Math.random() * 150)) + 1
    
    const pokemon = document.createElement('div')
    
    const newImg = document.createElement('img')
    newImg.src = `${baseURL}/${j}.png`
    newImg.loading = 'lazy'
    newImg.width = 96
    newImg.height = 96
    
    pokemon.appendChild(newImg)
    container.appendChild(pokemon)
    
    pokemon.classList.add('pokemon')
});


