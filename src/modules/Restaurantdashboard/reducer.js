//
//Reducer
//

import * as t from './actionTypes';

let initialState = {account:null ,error:null,loading:false,message:null,orders:null};
const load_validate_Reducer = (state = initialState, action) => {
    switch (action.type) {
      case t.LOAD_VALIDATION_START:
      case t.LOAD_ORDERS_START:
       return {
         ...state,
         error:null,
         loading:true
       }
  
      case t.LOAD_VALIDATION_SUCCESS:
        return  {
          ...state,
          error:null,
          loading:false,
          account:action.accounts
        }
      case t.LOAD_ORDERS_SUCCESS:
        return  {
          ...state,
          loading:false,
          orders:action.orders
        }
      case t.DELETE_ACCOUNT:
        return  {
          ...state,
          message:action.message,
        
        }
      case t.ACCEPT_ACCOUNT:
        return  {
          ...state,
          message:action.message,
        
        }
       
      case t.LOAD_VALIDATION_FAIL:
      case t.LOAD_ORDERS_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
      default:
        return state;
    }
  };
  
  export default load_validate_Reducer;