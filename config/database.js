const mongoose = require('mongoose');
const { MONGO_DB_URI, PORT, } = require ('./dotenv');

const ConnectDB = async () =>{
    try{
        await mongoose.connect(MONGO_DB_URI);
        console.log("Successiful connection to DB!!")
    }catch(e){
        console.log("Connection to DB is failed...");
    }
};


module.exports = ConnectDB;