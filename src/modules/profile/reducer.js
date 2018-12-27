//
//Reducer
//

import * as t from './actionTypes';

let initialState = { message:null,error:null,loading:false,UserInfo:null};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {

      case t.DELETE_ACCOUNT_START:
      case t.UPDATE_ACCOUNT_START:
       return {
         ...state,
         loading:true
       }
  
      case t.DELETE_ACCOUNT_SUCCESS:
      return  {
        ...state,
        loading:false,
        message:action.message
       
      }
      case t.UPDATE_ACCOUNT_SUCCESS:
        return  {
          ...state,
          loading:false,
          UserInfo:action.message
         
        }
       
      case t.DELETE_ACCOUNT_FAIL:
      case t.UPDATE_ACCOUNT_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
    
       default:
        return state;
    }
  };
  
  export default profileReducer;