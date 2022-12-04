const mongoose = require('mongoose');
// Configration of dotenv
const dotenv = require('dotenv');
dotenv.config({path : './config.env'});

exports.connectDatabase = (db_url)=>{
    mongoose.connect(db_url)
    .then((data)=>{
        console.log("DB Server Connected"+data.connection.host);
    })
    .catch((err)=>{
        console.log("Error : "+err);
    })
}