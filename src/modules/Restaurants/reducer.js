//
//Reducer
//

import * as t from './actionTypes';

let initialState = { data:null ,error:null,loading:false};
const loadReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.LOAD_RESTAURANTS_START:
       return {
         ...state,
         error:null,
         loading:true
       }
  
      case t.LOAD_RESTAURANTS_SUCCESS:
        return  {
          ...state,
          error:null,
          loading:false,
          data:action.data
        }
       
      case t.LOAD_RESTAURANTS_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        }  
   
      default:
        return state;
    }
  };
  
  export default loadReducer;