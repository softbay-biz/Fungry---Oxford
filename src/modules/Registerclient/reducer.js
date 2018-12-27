//
//Reducer
//

import * as t from './actionTypes';

let initialState = { message:null,error:null,loading:false};
const deliveryReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.REGISTER_CLIENT_START:
       return {
         ...state,
         loading:true
       }
  
      case t.REGISTER_CLIENT_SUCCESS:
        return  {
          ...state,
          loading:false,
          message:action.message
         
        }
       
      case t.REGISTER_CLIENT_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
    
       default:
        return state;
    }
  };
  
  export default deliveryReducer;