//
//Reducer
//

import * as t from './actionTypes';

let initialState = { time:null,date:null,amount:null,food:null,error:null,loading:false,message:null};
const setReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case t.SET_DELIVERY_START_ANYTHING:
      case t.SET_ORDER_FOODS_START:
       return {
         ...state,
         error:null,
         loading:true
       }
  
      case t.SET_DELIVERY_AMOUNT:
        return  {
          ...state,
          error:null,
          loading:false,
          amount:action.amount
        }
      case t.SET_ORDER_FOODS_SUCCESS:
      case t.SET_ORDER_FOODS_FAIL:
        return  {
          ...state,
          loading:false,
          message:action.message
        }
      case t.SET_DELIVERY_FOODS:
        return  {
          ...state,
          error:null,
          loading:false,
          food:action.food
        }
      case t.SET_DELIVERY_TIME:
        return  {
          ...state,
          error:null,
          loading:false,
          time:action.time
        }
      case t.SET_DELIVERY_DATE:
        return  {
          ...state,
          error:null,
          loading:false,
          date:action.date
        }
       
      case t.SET_DELIVERY_FAILED:
        return {
          ...state,
          error:action.error,
          loading:false
        } 
      default:
        return state;
    }
  };
  
  export default setReducer;