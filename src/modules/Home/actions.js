import * as t from './actionTypes';
import  axios from  'axios';




export const currentPage =(page) => {
      
    return {
        type :t.PAGE,
        page:page

    };

};


