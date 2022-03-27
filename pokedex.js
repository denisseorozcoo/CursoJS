const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            console.log(pokeName);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);


            let poket = data.types[0].type.name;
            pokeType(poket);
            console.log(poket);
    
            let pokem = data.moves;
            pokeMoves(pokem);
            console.log(pokem);
            
            for(let i=0; i<6; i++)
            {
                console.log(i);
                let pokes = data.stats[i].base_stat;
                pokeStats(pokes);
                console.log(pokes); 
                let poken = data.stats[i].stat.name;
                pokeStats(poken);
                console.log(poken); 
            }
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeType = (url) => {
    const poketipo = document.getElementById("poket");
    poketipo.src = url;
}

const pokeMoves = (url) => {
    const pokemovimientos = document.getElementById("poket");
    pokemovimientos.src = url;
}
const pokeStats = (url) => {
    const pokeestadisticas = document.getElementById("poket");
    pokeestadisticas.src = url;
}


