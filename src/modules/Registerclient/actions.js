import * as t from './actionTypes';
import  axios from  'axios';




export  const registerStart= () => {
    
    return {
        type:t.REGISTER_CLIENT_START,
        
    };


}


export  const registerFail =(error) => {

    return {
        type:t.REGISTER_CLIENT_FAIL,
        error :error
    };

}



export  const registerSuccess =(message) => {
     
    return {
        type:t.REGISTER_CLIENT_SUCCESS,
        message:message
    };


}



export const register = (registerData) => {

    return dispatch => {
        dispatch(registerStart());
 
        axios.post("http://fungry.club/dev/API/entryPoint.php",registerData,
     {headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }}
    )
      .then( (reponse ) => {
              console.log("Here  is before the message");
              console.log(reponse);
              console.log("The  message  is   up  ya  ");
              dispatch(registerSuccess(reponse.data.message));
          }
      )
      .catch( (error) => {
         dispatch(registerFail("Registration unsuccessfull  try again!"));

      })  

    };
};



