import * as t from './actionTypes';
import  axios from  'axios';




export  const contactStart= () => {
    
    return {
        type:t.REGISTER_CONTACT_START,
        
    };


}


export  const contactFail =(error) => {

    return {
        type:t.REGISTER_CONTACT_FAIL,
        error :error
    };

}



export  const contactSuccess =(message) => {
     
    return {
        type:t.REGISTER_CONTACT_SUCCESS,
        message:message
    };


}



export const contactUS = (email,subject,message,phone_number) => {

    return dispatch => {
        dispatch(contactStart());
       
        let EmailSend = {
            requestName:btoa(btoa(btoa("sendMail"))),
            data:{
              to:"no-reply@fungry.club",
              from:email,
              subject:subject,
              message:message + " "+phone_number
             }
            };
      
      axios.post("http://fungry.club/dev/API/entryPoint.php",EmailSend,
      {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        }})
      .then(
          reponse => {
            dispatch(contactSuccess("Your message has been sent. We'll contact you as soon as possible"));
             
          }
      )
      .catch( error => {
        
         dispatch(contactFail("Sorry , we had a problem  while connecting to the server, please  try again."));

      })  

    };
};



