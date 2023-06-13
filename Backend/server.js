const express = require('express');
const {chats} = require('./data/data.js');
// const connectdb = require('./config/db')
// const mongoose = require('mongoose');
// const userRoutes = require('./routes/userRoutes').registerUser 
const user = require('./controller/userController').registerUser 

// require('dotenv').config();
// connectdb();
const App = express()

App.use(express.json()); 
const PORT = process.env.PORT || 5000;

App.get('/api', (req, res) =>{
    res.send("api is runnning")
})


App.get('/chat' , (req, res) =>{
    res.send(chats)
})
App.use('/api/user' ,user);
 

// App.get('/chat/users',(req,res) =>{
//     const user = chats.filter((user) => user.users === req.params.users)
//     // res.send(user)
//     res.json({ message: 'GET request received' });
// })

// App.get('chats/:id' ,(req,res) => {
//     const chat =  chats.filter((ch) => ch._id === req.params.id )
//     res.send(chat);
// })
App.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
//  await connection;
})


