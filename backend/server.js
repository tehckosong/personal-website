const express = require("express")
const cors = require('cors')
const path = require("path")
const bodyparser = require("body-parser")

const emailroute = require("./route/email");
require('dotenv').config()


const initializeApp = () => {
    const app = express();
    
    //middleware
    app.use(cors());
    app.use(bodyparser.json()) // use JSON
    app.use("/send" , emailroute)

    //API Routes
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '/index.html'));
      });
    

    
    //Open Port
    const Port = 3000
        app.listen(process.env.PORT || Port , () => {
            console.log("server is open")
        })

}

initializeApp();