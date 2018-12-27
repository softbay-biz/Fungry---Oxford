//
//Reducer
//

import * as t from './actionTypes';

let initialState = { data:null ,error:null,loading:false,cart:null};
const loadMenuReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.LOAD_RESTAURANTS_MENU_START:
       return {
         ...state,
         error:null,
         loading:true
       }
  
      case t.LOAD_RESTAURANTS_MENU_SUCCESS:
        return  {
          ...state,
          error:null,
          loading:false,
          data:action.data
        }
       
      case t.LOAD_RESTAURANTS_MENU_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        } 
        case t.LOAD_RESTAURANTS_MENU_ADD:
        case t.LOAD_RESTAURANTS_MENU_REMOVE_ELEMENT:
        return {
          ...state,
          cart:action.cart
        } 
      case t.LOAD_RESTAURANTS_MENU_REMOVE:
        return {
          ...state,
          error:action.error
        } 
        case t.LOAD_RESTAURANTS_MENU_REMOVE_ALL:
        return {
          ...state,
          cart:null
        }

   
      default:
        return state;
    }
  };
  
  export default loadMenuReducer;