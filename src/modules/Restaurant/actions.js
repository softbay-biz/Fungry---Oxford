import * as t from './actionTypes';
import  axios from  'axios';




export  const registerrestaurantStart= () => {
    
    return {
        type:t.REGISTER_RESTAURANTS_START,
        
    };


}


export  const registerrestaurantFail =(error) => {

    return {
        type:t.REGISTER_RESTAURANTS_FAIL,
        error :error
    };

}



export  const registerrestaurantSuccess =(message) => {
     
    return {
        type:t.REGISTER_RESTAURANTS_SUCCESS,
        message:message
    };


}



export const registerRestaurant = (registerData) => {

    return dispatch => {
        dispatch(registerrestaurantStart());
       
    
      console.log(registerData);
      axios.post("http://fungry.club/dev/API/entryPoint.php",registerData,
      {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }}
    
    )
      .then(
          reponse => {
              console.log(reponse);
              dispatch(registerrestaurantSuccess(reponse.data.message));
          }
      )
      .catch( error => {
        
         console.log(error);
         dispatch(registerrestaurantFail(error.Error));

      })  

    };
};



