/* base-import */
const express = require('express');
const cors = require('cors');

/* routes-import */
const pokeRouter=require('./routes/pokemon');
const userRouter = require('./routes/user');

/* configuration */
const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/pokemon',pokeRouter);
app.use('/user',userRouter)

app.get('/', (req,res)=>{
    res.send('Willkommen im Pokeland!')
});

app.use('*', (req, res) => res.sendStatus(404));

module.exports=app