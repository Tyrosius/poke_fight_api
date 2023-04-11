const axios = require('axios');
const { json } = require('express');


const getPokemonList = async(req,res)=>{
    try {
        const pokeListData = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1500');
    res.json(pokeListData.data.results);
    } catch (error) {
        console.log(error)
    }
}
const getPokemonById=async(req,res)=>{
    const {id}=req.params;
    try {
        const pokemonNameData = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemon={}
        pokemon.name=pokemonNameData.data.names.find(entry=>entry.language.name==="de").name;

        const stats={}
        stats.hp=pokemonData.data.stats[0].base_stat;
        stats.attack=pokemonData.data.stats[1].base_stat;
        stats.defence=pokemonData.data.stats[2].base_stat;
        stats.spAttack=pokemonData.data.stats[3].base_stat;
        stats.spDefence=pokemonData.data.stats[4].base_stat;
        stats.speed=pokemonData.data.stats[5].base_stat;
        pokemon.stats=stats;

        pic=pokemonData.data.sprites.other.home.front_default;
        pokemon.pic=pic;

        res.json(pokemon)
    } catch (error) {
        
    }
}

module.exports={getPokemonList,getPokemonById}