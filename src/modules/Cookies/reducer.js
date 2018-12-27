//
//Reducer
//

import * as t from './actionTypes';

let initialState = { message:null,error:null,loading:false,open:false};
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.REGISTER_CONTACT_START:
       return {
         ...state,
         loading:true
       }
  
      case t.REGISTER_CONTACT_SUCCESS:
        return  {
          ...state,
          loading:false,
          message:action.message,
          open:true
         
        }
       
      case t.REGISTER_CONTACT_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
    
       default:
        return state;
    }
  };
  
  export default contactReducer;