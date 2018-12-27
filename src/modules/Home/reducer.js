//
//Reducer
//

import * as t from './actionTypes';

let initialState = { page:null};
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case t.PAGE:
       return {
         page:action.page
       }

  
      default:
        return state;
    }
  };
  
  export default pageReducer;