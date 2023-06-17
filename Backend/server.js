const express = require('express');
const {chats} = require('./data/data.js');
const connectdb = require('./config/db')
// const mongoose = require('mongoose');
const user = require('./controller/userController').registerUser 
const App = express()
var bodyParser = require('body-parser');
const router = express.Router();




require('dotenv').config();
connectdb();
App.use(bodyParser.urlencoded({
    extended: true
}));
App.use(bodyParser.json());


App.use("/api/user", user);
router.route("/").post(router)

// App.post('/api/user', (req,res) => {
//     const { name } = req.body;
//     console.log(name);
// })


//  to accept the json data
const PORT = process.env.PORT || 5000;

App.get('/api', (req, res) =>{
    res.send("api is runnning")
})

App.get('/chat' , (req, res) =>{
    res.send(chats)
})

App.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


