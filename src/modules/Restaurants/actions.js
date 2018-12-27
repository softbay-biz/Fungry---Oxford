import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';







export const loadrestaurantStart =() => {
      
      return {
          type :t.LOAD_RESTAURANTS_START
      };

};

export let valeurs = {};


export const loadrestaurantSuccess = (data) => {
   
      return {
          type:t.LOAD_RESTAURANTS_SUCCESS,
          data:data
      };

};


export  const  loadrestaurantFail = (error) => {

      return {
          type:t.LOAD_RESTAURANTS_FAIL,
          error :error
      };
};

export  const closeAllLists = (elmnt)=>{
                                    /*close all autocomplete lists in the document,
                                    except the one passed as an argument:*/
                                    let x = document.getElementsByClassName("autocomplete-list");
                                    for (let i = 0; i < x.length; i++) {
                                      if (elmnt != x[i] ) {
                                      x[i].parentNode.removeChild(x[i]);
                                    }
                                  }
                                }
export  var categories_tab = []; 
export const Load_Restaurant = (location,cuisine) => {

     return dispatch => {
         dispatch(loadrestaurantStart());
        
         var formDataToSend = {
            requestName:btoa(btoa(btoa("searchRestaurant"))),
            data:{
              search_type:"none",
            }
          };


       axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend ,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }})
            .then(
           reponse => {
               dispatch(loadrestaurantSuccess(reponse.data));
           })
       .catch( error => {
         
         console.log(error);
          dispatch(loadrestaurantFail(error));
 
       })  

     };
};

export const Load_Restaurant_By_Postocode = (postcode) => {

     return dispatch => {
         dispatch(loadrestaurantStart());
        
         var formDataToSend = {
            requestName:btoa(btoa(btoa("searchRestaurant"))),
            data:{
              search_type:"none",
            }
          };


       axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend ,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }})
            .then(
           reponse => {
               console.log(reponse);
               valeurs = reponse;
               dispatch(loadrestaurantSuccess(reponse.data));
           })
       .catch( error => {
         
         console.log(error);
          dispatch(loadrestaurantFail(error));
 
       })  

     };
};

