import * as t from './actionTypes';
import axios from 'axios';

//var stripe = require("stripe")("ca_DPRrFCwmsIEVkNDofjNGKm2oeQzVwNIz");


export const checkout_Start =() => {
      
    return {
        type :t.CHECKOUT_START
    };

};

export const checkout_Success = (message) => {
   
    return {
        type:t.CHECKOUT_SUCCESS,
         message : message,
    };

};


export  const  checkout_Fail = (error) => {

    return {
        type:t.CHECKOUT_FAIL,
        error :error
    };
};

export const checkout= (registerData) => {

    return dispatch => {
        dispatch(checkout_Start());
       
    
      console.log(registerData);
      axios.post("http://fungry.club/dev/API/entryPoint.php",registerData,
      {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }}
    
    )
      .then(
          reponse => {
              console.log(reponse);
              dispatch(checkout_Success(reponse.data.message));
          }
      )
      .catch( error => {
        
         console.log(error);
         dispatch(checkout_Fail(error.Error));

      })  

    };
};