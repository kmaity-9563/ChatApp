// rafce
import React from 'react';
import axios from "axios";
import { useEffect } from 'react'

export const MainPage = () => {

    const fetchchatdata = async () =>{
        const data = axios.get('/chat')
        .then(response =>   console.log(response) ).then(data => console.log(data))
        .catch(err => console.error(err))
        console.log(data);
    }

    useEffect(() => {
      fetchchatdata();
    },[])
    
    return ( 
    <div>MainPage</div>
     );
  
}

 
