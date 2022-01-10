var express = require('express')
var router = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config()
const sendemail =  async (req, res) => { 
    const {Name ,Email , Contact , Message} = req.body;
    var transporter = nodemailer.createTransport({
        service: 'gmail' ,
        auth : {
            user : process.env.EMAIL_USER,
            pass :process.env.EMAIL_PASS,
        }
    });

    var mailOptions = {
        from: Email,
        to: process.env.EMAIL_USER,
        subject : "Email from Personal Website",
        html : `<h1>Email from ${Name} </h1> 
            <p> ${Message} <p>
            <p> Contact No. ${Contact}  Email ${Email}</p> 
        `
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.status(200).json({message: "email has been sent" , status: 200})
      res.status(400).json({message: "email has not been send" , status: 400})
}

router.post("/" , sendemail) 

module.exports = sendemail;
