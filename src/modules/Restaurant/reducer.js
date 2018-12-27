//
//Reducer
//

import * as t from './actionTypes';

let initialState = { message:null,error:null,loading:false};
const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.REGISTER_RESTAURANTS_START:
       return {
         ...state,
         loading:true
       }
  
      case t.REGISTER_RESTAURANTS_SUCCESS:
        return  {
          ...state,
          loading:false,
          message:action.message
         
        }
       
      case t.REGISTER_RESTAURANTS_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
    
       default:
        return state;
    }
  };
  
  export default restaurantReducer;