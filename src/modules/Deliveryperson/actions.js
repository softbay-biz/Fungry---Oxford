import * as t from './actionTypes';
import  axios from  'axios';




export  const registerdeliveryStart= () => {
    
    return {
        type:t.REGISTER_DELIVERY_START,
        
    };


}


export  const registerdeliveryFail =(error) => {

    return {
        type:t.REGISTER_DELIVERY_FAIL,
        error :error
    };

}



export  const registerdeliverySuccess =(message) => {
     
    return {
        type:t.REGISTER_DELIVERY_SUCCESS,
        message:message
    };


}



export const registerDelivery = (registerData) => {

    return dispatch => {
        dispatch(registerdeliveryStart());
       
    
      console.log(registerData);
      axios.post("http://fungry.club/dev/API/entryPoint.php",registerData,
      {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then(
          reponse => {
              console.log(reponse);
              dispatch(registerdeliverySuccess(reponse.data.message));
          }
      ).catch( error => {
        
         console.log(error);
         dispatch(registerdeliveryFail(error.Error));

      })  

    };
};



