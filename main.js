console.log('Hello DOM')

console.log(document)
console.log(document.body.children)

// const form = document.querySelector('#pokedexSearch')
// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
    
//     // get info directly from element
//     const input = document.getElementById('myPokemon')
//     console.log(input.value)

//     // get info from event (using name attribute in input tag)
//     console.log(e.target.pokemon.value)

//     const url = `http://pokeapi.co/api/v2/pokemon/${input.value}`
// })

const container = document.querySelector('.container')

const getFormData = async (e) => {
    e.preventDefault();

    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    //make request using fetch or axios

    const res = await fetch(url)
    const data = await res.json();  

    render(data)

};

const render = (data) => {
    container.innerHTML = '';
    let newHtml
    if (data){
        try{

        newHtml = document.createElement('div')
        newHtml.innerHTML = `
        <div class="pokecard">
        <div class="card" style="width: 18rem; ">
          <div class="card_top">
            <h5 class="card-title" style="font-weight: 800;">${data.name}</h5>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p style="font-size: small;">EXP</p>
            <p style="font-weight: 800;">${data.base_experience}</p>
            <p></p>
            <p style="margin-right: 0; font-size: small;">HP
            <p style="font-weight: 800;">${data.stats[0].base_stat}</p>
            </p>
          </div>
          <img src="${data.sprites.other.home.front_default}" class="card-img-top pokeimage" alt="image of a pokemon"
            style="width:250px; height: 230px;">
          <div class="card-body cardstats" style=" padding: 8px; padding-bottom: 0;">
            <div class="cardstats" style="display: flex; justify-content: space-between;">
              <p class="card-text" style="font-weight: 800;">Pokémon #${data.id}</p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p style="font-size: small;">ATK</p>
              <p style="font-weight: 800;">${data.stats[1].base_stat}</p>
              <p></p>
              <p style="font-size: small;">DEF</p>
              <p style="font-weight: 800;">${data.stats[2].base_stat}</p>
            </div>
            <div class="cardstats" style="padding: 0px; margin: 0px; font-size: small;">
              <h6 style="padding: 0px; margin: 0px;">${data.types[0].type.name}</h6>
            </div>
          </div>
          <ul class="list-group list-group-flush" style="">
            <li class="list-group-item" style=" font-weight: 800; padding-top: 5px; padding-bottom: 5px; padding-left: 8px;">
              Abilities</li>
            <li class="list-group-item" style=" font-weight: 600; padding-top: 5px; padding-bottom: 5px;">
              ${data.abilities[0].ability.name}</li>
            <li class="list-group-item" style=" font-weight: 600; padding-top: 5px; padding-bottom: 5px;">
            ${data.abilities[1].ability.name ? data.abilities[1].ability.name : ''}</li>
          </ul>
        </div>
        </div>
        `
    }
    catch{
        newHtml = document.createElement('h2')
        newHtml.innerText = "something isn't right..."
        // this error catch isn't workinggg :(
        }
        container.append(newHtml);
}else{
    newHtml = document.createElement('h2')
    newHtml.innerText = "something isn't right..."
    // this error catch isn't workinggg :(
    }
    container.append(newHtml);
};

const form = document.getElementById('pokedexSearch');
form.addEventListener('submit', getFormData)



