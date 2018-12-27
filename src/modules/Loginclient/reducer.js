//
//Reducer
//

import * as t from './actionTypes';

let initialState = { token:null, userInfo:null ,error:null,loading:false,postcode:null};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.AUTH_START:
       return {
         ...state,
         error:null,
         loading:true
       }
      case t.POSTCODE:
       return {
         ...state,
       postcode:action.postcode
       }
  
      case t.AUTH_SUCCESS:
        return  {
          ...state,
          error:null,
        
          token:action.token,
          userInfo:action.userInfo,
          loading:false
        }
       
      case t.AUTH_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
      case t.AUTH_LOGOUT :
        return  {
          ...initialState
        }
  
      default:
        return state;
    }
  };
  
  export default authReducer;