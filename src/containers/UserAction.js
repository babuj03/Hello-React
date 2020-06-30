
import React from 'react';
import axios from 'axios';
import config from '../config/config';
import store from '../index'




 const fetchUsers = (apiEndpoint)=>{
     console.log("-------------------------------");
     //let data = [];
     return  axios.get(config.baseUrl+apiEndpoint)
     .then((response)=>{
        console.log(response);
       
        return response;
    })
    .catch((err)=>{
       console.log("=======",err);
    })
    
}


export default fetchUsers 