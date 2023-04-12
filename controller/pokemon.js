const axios = require('axios');
const { json } = require('express');


const getPokemonList = async(req,res)=>{
    try {
        const pokeListData = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500');
    res.json(pokeListData.data.results);
    } catch (error) {
        res.sendStatus(500);
    }
}
const getPokemonById=async(req,res)=>{
    const {id}=req.params;
    try {
        const pokemonNameData = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemon={}
        pokemon.name=pokemonNameData.data.names.find(entry=>entry.language.name==="de").name;

        const stats=[];
        stats.push({hp:pokemonData.data.stats[0].base_stat});
        stats.push({attack:pokemonData.data.stats[1].base_stat});
        stats.push({defence:pokemonData.data.stats[2].base_stat});
        stats.push({spAttack:pokemonData.data.stats[3].base_stat});
        stats.push({spDefence:pokemonData.data.stats[4].base_stat});
        stats.push({speed:pokemonData.data.stats[5].base_stat});
        pokemon.stats=stats;

        pic=pokemonData.data.sprites.other['official-artwork'].front_default;
        pokemon.pic=pic;

        const type=[];
        type.push(pokemonData.data.types[0].type.name);
        type.push(pokemonData.data.types[1].type.name);

        pokemon.type=type;

        res.json(pokemon)
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports={getPokemonList,getPokemonById}