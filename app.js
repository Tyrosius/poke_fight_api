/* base-import */
const express = require('express');
const cors = require('cors');

/* routes-import */
const pokeRouter=require('./routes/pokemon')

/* configuration */
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/pokemon',pokeRouter);

app.get('/', (req,res)=>{
    res.send('Willkommen im Pokeland!')
})

module.exports=app