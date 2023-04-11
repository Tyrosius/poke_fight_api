const {Router}=require('express');
const{getPokemonList,getPokemonById} =require('../controller/pokemon')

const pokeRouter = Router();

pokeRouter.get('/',getPokemonList)

pokeRouter.get('/:id',getPokemonById)

module.exports=pokeRouter