//
//Reducer
//

import * as t from './actionTypes';

let initialState = {loading:false,message:null};
const ResetReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.RESET_START:
       return {
         ...state,
         loading:true
       }
      
      case t.RESET_SUCCESS:
        return  {
          ...state,
          loading:false,
          message:action.message
        }
       
     
  
      default:
        return state;
    }
  };
  
  export default ResetReducer;