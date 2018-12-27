import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';











export const setDelvieryStart =() => {
      
      return {
          type :t.SET_DELIVERY_START_ANYTHING
      };

};

export const setDelvieryFailed =() => {
      
    return {
        type :t.SET_DELIVERY_FAILED
    };

};

export const setDelvieryTime =(time) => {
      
    return {
        type :t.SET_DELIVERY_TIME,
        time,
    };

};
export const setDelvieryDate =(date) => {
      
    return {
        type :t.SET_DELIVERY_DATE,
        date,
    };

};
export const setDelvieryAmount =(amount) => {
      
    return {
        type :t.SET_DELIVERY_AMOUNT,
        amount,
    };

};

export const setDelvieryfood =(food) => {
      
    return {
        type :t.SET_DELIVERY_FOODS,
        food,
    };

};
export const setorderfoodStart =() => {
      
    return {
        type :t.SET_ORDER_FOODS_START
   
    };

};
export const setorderfoodSuccess =(message) => {
      
    return {
        type :t.SET_ORDER_FOODS_SUCCESS,
         message,
    };

};
export const setorderfoodFail =(message) => {
      
    return {
        type :t.SET_ORDER_FOODS_FAIL,
        message,
    };

};










export const SetTime = (time) => {

     return dispatch => {
         dispatch(setDelvieryStart());
        
         dispatch(setDelvieryTime(time));
        


    //    axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend,
    //    {headers : {
    //               'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    //           }}).then(
    //        reponse => {
    //            console.log(reponse.data[id]);
    //            dispatch(loadrestaurantmenuSuccess(reponse.data[id]));
    //        }
    //    )
    //    .catch( error => {
         
    //      console.log(error);
    //       dispatch(loadrestaurantmenuFail(error));
 
    //    })  

     };
};

export const SetAmount = (time) => {

     return dispatch => {
         dispatch(setDelvieryStart());
        
         dispatch(setDelvieryAmount(time));
        


    //    axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend,
    //    {headers : {
    //               'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    //           }}).then(
    //        reponse => {
    //            console.log(reponse.data[id]);
    //            dispatch(loadrestaurantmenuSuccess(reponse.data[id]));
    //        }
    //    )
    //    .catch( error => {
         
    //      console.log(error);
    //       dispatch(loadrestaurantmenuFail(error));
 
    //    })  

     };
};
export const SetDate = (date) => {

     return dispatch => {
         dispatch(setDelvieryStart());
        
         dispatch(setDelvieryDate(date));
        


    //    axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend,
    //    {headers : {
    //               'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    //           }}).then(
    //        reponse => {
    //            console.log(reponse.data[id]);
    //            dispatch(loadrestaurantmenuSuccess(reponse.data[id]));
    //        }
    //    )
    //    .catch( error => {
         
    //      console.log(error);
    //       dispatch(loadrestaurantmenuFail(error));
 
    //    })  

     };
};
export const SetPostcode = (postcode) => {

     return dispatch => {
         dispatch(setDelvieryStart());
        
         dispatch(setDelvieryDate(postcode));
        


    //    axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend,
    //    {headers : {
    //               'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    //           }}).then(
    //        reponse => {
    //            console.log(reponse.data[id]);
    //            dispatch(loadrestaurantmenuSuccess(reponse.data[id]));
    //        }
    //    )
    //    .catch( error => {
         
    //      console.log(error);
    //       dispatch(loadrestaurantmenuFail(error));
 
    //    })  

     };
};
export const SetFood = (food) => {

     return dispatch => {
         dispatch(setDelvieryStart());
        
         dispatch(setDelvieryfood(food));
        


    //    axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend,
    //    {headers : {
    //               'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    //           }}).then(
    //        reponse => {
    //            console.log(reponse.data[id]);
    //            dispatch(loadrestaurantmenuSuccess(reponse.data[id]));
    //        }
    //    )
    //    .catch( error => {
         
    //      console.log(error);
    //       dispatch(loadrestaurantmenuFail(error));
 
    //    })  

     };
};
export const SendOrder = (order) => {

     return dispatch => {
         dispatch(setorderfoodStart ());
        

       axios.post("http://fungry.club/dev/API/entryPoint.php",order,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse)
               dispatch(setorderfoodSuccess(reponse.data));
           }
       )
       .catch( error => {
         
         console.log(error);
          dispatch(setorderfoodFail(error));
 
       })  

     };
};