import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';











export const loadrestaurantmenuStart =() => {
      
      return {
          type :t.LOAD_RESTAURANTS_MENU_START
      };

};

export const loadrestaurantmenuAdd =(menu) => {
      
    return {
        type :t.LOAD_RESTAURANTS_MENU_ADD,
        menu:menu
    };

};

export const loadrestaurantmenuRemove =(menuid) => {
      
    return {
        type :t.LOAD_RESTAURANTS_MENU_REMOVE,
        menu:menuid
    };

};

export const addTocart =(productName,quantity,price,id) => {
  return dispatch => { 
   api.addToCart(productName,quantity,price,id).then(
       
    reponse => {
        dispatch(sentCart(reponse));
    }

   );
  
  }
}

export const deleteElement =(productName) => {
    return dispatch => { 
     api.deleteCartElement(productName).then(
         
      reponse => {
          dispatch(delCartEl(reponse));
      }
  
     );
    }
} 
   
export const  delCartEl =(cart)=> {

   
    return {
        type:t.LOAD_RESTAURANTS_MENU_REMOVE_ELEMENT,
        cart:cart
    } 
    
    }

export const  sentCart =(cart)=> {

   
return {
    type:t.LOAD_RESTAURANTS_MENU_ADD,
    cart:cart
} 

}

export  const getCart = () => {
   return dispatch => { 
    api.fetchCart().then(
        reponse => {
            dispatch(sentCart(reponse));
            
        });
        
    }
   
 
}

export  const replaceCart = (name,price,quantity) => {
   return dispatch => { 
    api.replaceCartElement(name,price,quantity).then(
        reponse => {
            dispatch(sentCart(reponse));
            
        });
        
    }
   
 
}

export  const  deleteCart =()=> {
     api.deleteCart();
    return {
        type:t.LOAD_RESTAURANTS_MENU_REMOVE_ALL,
    } 

}




export const loadrestaurantmenuSuccess = (data) => {
   
      return {
          type:t.LOAD_RESTAURANTS_MENU_SUCCESS,
          data:data
      };

};


export  const  loadrestaurantmenuFail = (error) => {

      return {
          type:t.LOAD_RESTAURANTS_MENU_FAIL,
          error :error
      };
};


export const Load_Menu_Restaurant = (id) => {

     return dispatch => {
         dispatch(loadrestaurantmenuStart());
        
       
         var formDataToSend = {
            requestName:btoa(btoa(btoa("searchRestaurant"))),
            data:{
              search_type:"id_members",
              value:id
            }
          };

        


       axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }}).then(
           reponse => {
               console.log(reponse.data[id]);
               dispatch(loadrestaurantmenuSuccess(reponse.data[id]));
           }
       )
       .catch( error => {
         
         console.log(error);
          dispatch(loadrestaurantmenuFail(error));
 
       })  

     };
};