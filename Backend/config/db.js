const mongoose = require('mongoose');
const uri = 'mongodb+srv://koushikMaity:km12345@chatapp.n1vpe1j.mongodb.net/';

const connectdb = async () => {
    try {
    const db = await mongoose.connect(uri ,{ useNewUrlParser : true, useUnifiedTopology : true }, )
    console.log(`database connected on host  : ${db.connection.host}`)
    } catch (err) {
        console.log(`error is : ${err.message}`)
        process.exit();
    }
   
}

// module.exports = connectdb;mongosh "mongodb+srv://koushikMaity:<password>@chatapp.53b3ohm.mongodb.net/<databaseName>" --apiVersion 1
module.exports = connectdb;