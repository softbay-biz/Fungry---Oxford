//
//Reducer
//

import * as t from './actionTypes';

let initialState = {data:null ,message:null,loading:false,category:null,menu:null};
const adminProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.UPDATE_MEAL_START:
      case t.GET_DISH_START:
      case t.ADD_MEAL_START:
      case t.UPDATE_PROFILE_START:
       return {
         ...state,
         error:null,
         loading:true
       }
       case t.GET_DISH_SUCCESS:
       return {
         ...state,
         loading:false,
         menu:action.menu
       }
       case t.GET_DISH_CAT_SUCCESS:
       return {
         ...state,
         loading:false,
         category:action.cat
       }

  
      case t.UPDATE_MEAL_SUCCESS:
      case t.ADD_MEAL_SUCCESS:
        return  {
          ...state,
          error:null,
          loading:false,
          message:action.message
        }
      case t.UPDATE_PROFILE_SUCCESS:
        return  {
          ...state,
          error:null,
          loading:false,
          message:action.data
        }
      case t.UPDATE_MEAL_FAIL:
      case t.GET_DISH_FAIL:
      case t.ADD_MEAL_FAIL: 
      case t.UPDATE_PROFILE_FAIL:
        return {
          ...state,
          error:action.error,
          loading:false
        } 
     
      default:
        return state;
    }
  };
  
  export default adminProfileReducer;