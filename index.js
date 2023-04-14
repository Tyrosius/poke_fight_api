require('dotenv').config();
const mongoConnect=require('./db/index');
const app = require('./app');

const PORT = process.env.PORT || 8000;

mongoConnect();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})