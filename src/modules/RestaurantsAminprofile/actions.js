import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';
import { Router } from 'react-router'










export const updateProfilestart =() => {
      
      return {
          type :t.UPDATE_PROFILE_START
      };

};

export const updateProfilesucess =(data) => {
      
    return {
        type :t.UPDATE_PROFILE_SUCCESS,
        data,
    };

};

export const updateProfilefail =(message) => {
      
    return {
        type :t.UPDATE_PROFILE_FAIL,
        message,
    };

};



export const Updateprofile = (datafrom) => {

     return dispatch => {
         dispatch(updateProfilestart());
        
       

         axios.post("http://fungry.club/dev/API/entryPoint.php",datafrom,
         {headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                }}
        ).then(
           reponse => {
               console.log(reponse.data);
               updateProfilesucess(reponse.data);
               window.location.reload();
               
           }
       ).catch( error => {
         
         console.log(error);
          dispatch(updateProfilefail(error));
 
       })  

     };
};
export const updateMealstart =() => {
      
      return {
          type :t.UPDATE_MEAL_START
      };

};

export const updateMealsucess =(message) => {
      
    return {
        type :t.UPDATE_MEAL_SUCCESS,
        message,
    };

};

export const updateMealfail =(message) => {
      
    return {
        type :t.UPDATE_MEAL_FAIL,
        message,
    };

};



export const Updatemeal = (datafrom) => {

     return dispatch => {
         dispatch(updateMealstart());
        
       

       axios.post("http://fungry.club/dev/API/entryPoint.php",datafrom,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse.data);
               
           }
       )
       .catch( error => {
         
         console.log(error);
          dispatch(updateMealfail(error));
 
       })  

     };
};
export const addMealstart =() => {
      
      return {
          type :t.ADD_MEAL_START
      };

};

export const addMealsucess =(message) => {
      
    return {
        type :t.ADD_MEAL_SUCCESS,
        message,
    };

};

export const addMealfail =(message) => {
      
    return {
        type :t.ADD_MEAL_FAIL,
        message,
    };

};



export const Addmeal = (datafrom) => {

     return dispatch => {
         dispatch(addMealstart());
        
       

       axios.post("http://fungry.club/dev/API/entryPoint.php",datafrom,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse.data);
               
               dispatch(addMealsucess("New dish added"));
               window.location.reload();
           }
       )
       .catch( error => {
         
         console.log(error);
          dispatch(addMealfail(error));
 
       })  

     };
};


export const getDishstart =() => {
      
    return {
        type :t.GET_DISH_START
    };

};

export const getDishsucess =(menu) => {
    
  return {
      type :t.GET_DISH_SUCCESS,
      menu,
  };

};
export const getDishCatsucess =(cat) => {
    
  return {
      type :t.GET_DISH_CAT_SUCCESS,
      cat,
  };

};

export const getDishfail =(message) => {
    
  return {
      type :t.GET_DISH_FAIL,
      message,
  };

};






export const GetDish = (id) => {

     return dispatch => {
         dispatch(getDishstart());
        
       let  dishcat ={
        requestName:btoa(btoa(btoa("searchMenu"))),
        data : {id_restaurant:id}
       }

       axios.post("http://fungry.club/dev/API/entryPoint.php",dishcat,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse)
                dispatch(getDishsucess(reponse.data));
           }
       ).catch( error => {
         
         console.log(error);
          dispatch(getDishfail(error));
 
       })  

     };
};

export const GetDishcat = (datafrom) => {

     return dispatch => {
         dispatch(getDishstart());
        
       let  dishcat ={
        requestName:btoa(btoa(btoa("getCategories"))),
        data:{
        }
       }

       axios.post("http://fungry.club/dev/API/entryPoint.php",dishcat,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse.data);
                dispatch(getDishCatsucess(reponse.data));
           }
       ).catch( error => {
         
         console.log(error);
          dispatch(getDishfail(error));
 
       })  

     };
};
export const DeleteDish = (iddish,idresto) => {

     return dispatch => {
         dispatch(getDishstart());
      
       let  dishcat ={
        
        requestName:btoa(btoa(btoa("deleteDish"))),
        data:{
          id_dish:idresto,
          id_restaurant:iddish
        }
       }
       console.log(dishcat);

       axios.post("http://fungry.club/dev/API/entryPoint.php",dishcat,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse.data);
               window.location.reload();
           }
       ).catch( error => {
         
         console.log(error);
 
       })  

     };
};