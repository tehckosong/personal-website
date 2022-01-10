const express = require('express');

const app = express();
require('dotenv').config()
app.use(express.static(`${__dirname}/build`)); //server static file in build folder
app.use('/Assets' , express.static('Assets')) 

app.listen(8000 , () => {
    console.log("listening to port 8000")
});

