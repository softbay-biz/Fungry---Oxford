//
// Set of functions for auth Users
//

import axios from 'axios';

//Signin  users
export function  LoginUser(Userdata){
  

    axios.post("/url",Userdata)
    .then((response) => { 
        
        console.log(response);

        var Resanswer =  response;
    
    })
    .catch((error) =>console.log(error));



}