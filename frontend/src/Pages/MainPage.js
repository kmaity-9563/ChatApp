// rafce
import React from 'react';
import { useEffect , useState } from 'react'

export const MainPage = () => {

const [chat,setChat] = useState([]);

    const FetchChatData = async () =>{
     try {
    const chats = await fetch('/chat');
    const jsonData = await chats.json();
    console.log(jsonData);
    setChat(jsonData);    
    }
    catch (error) {
        console.error(error);
    }
  }
    useEffect(() => {
      FetchChatData();
    },[])
    
    return ( 
     <div>
        {chat ? chat.map(chats => (
          <h1 key={chats._id}> {chats.chatName}</h1>
        ) )
          : <h1>loading chat</h1> }
   </div>
    //  <h2>here it is</h2>
     );
};

 
