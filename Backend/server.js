const express = require('express');
const {chats} = require('./data/data.js')
const dotenv = require('dotenv')
dotenv.config();

const App = express()

const PORT = process.env.PORT || 5000;

App.get('/api', (req, res) =>{
    res.send("api is runnning")
})

App.get('/chat' , (req, res) =>{
    res.send(chats)
    // res.send(
    //   {  name : 'koushik',}
    // )
})

App.get('chats/:id' ,(req,res) => {
    const chat =  chats.filter((ch) => ch._id === req.params.id )
    res.send(chat);
})
App.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})