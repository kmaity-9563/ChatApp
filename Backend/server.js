const express = require('express');
const {chats} = require('./data/data.js');
// const connectdb = require('./config/db')
// const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes').registerUser 
const user = require('./controller/userController').registerUser 


// const Route = express.Router();
const router = express.Router();
router.route("/api").post(user)

require('dotenv').config();
// connectdb();
const App = express()

App.use(express.json());
//  to accept the json data
const PORT = process.env.PORT || 5000;

// App.get('/api', (req, res) =>{
//     res.send("api is runnning")
// })


App.get('/chat' , (req, res) =>{
    res.send(chats)
})
  

  App.use('/api' ,user );


App.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})


