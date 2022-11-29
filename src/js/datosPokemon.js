
const consultarPokemon = (id, number) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            pintarPokemon(data, number)
        })

        .catch((error) => {
            console.log(error);
        });
};



const btnSeleccionar = () => {
    let primerPk = Math.round(Math.random() * 130);
    let segundoPk = Math.round(Math.random() * 160);
    consultarPokemon(primerPk, 1);
    consultarPokemon(segundoPk, 2);
};

btnSeleccionar()

const lista = document.getElementById("listPokemon")

const pintarPokemon = (data, id) => {
    let item = lista.querySelector(`#pokemon-${id}`);

    item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);

    item.getElementsByTagName("h5")[0].innerHTML = data.name;
    item.getElementsByTagName("p")[0].innerHTML = data.base_experience;
    


    let pokeHabil = ''

    for (let i = 0; i < data.abilities.length; i++) {
        pokeHabil += `<li>${data.abilities[i].ability.name}</li>`
    }
    console.log(pokeHabil);
    item.getElementsByTagName('ol')[0].innerHTML = pokeHabil

}

