const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const uri = 'mongodb+srv://koushikmaity9563:iamkm12345@chatapp.cu2mh23.mongodb.net/?retryWrites=true&w=majority' ;
// require('dotenv').config();


const connectdb =  async () => {
    try {
    const db = await  mongoose.connect(uri,{ useNewUrlParser : true, useUnifiedTopology : true }, ) ;
    const data = db.connection;
    console.log(`database connected on host  : ${db.connection.host}`);
    } catch (err) {
        console.log(`error is : ${err.message}`);
        process.exit();
    }  
}

// module.exports = connectdb;mongosh "mongodb+srv://koushikMaity:<password>@chatapp.53b3ohm.mongodb.net/<databaseName>" --apiVersion 1
module.exports =  connectdb;