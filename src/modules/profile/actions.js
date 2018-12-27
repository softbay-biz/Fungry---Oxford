import * as t from './actionTypes';
import  axios from  'axios';




export  const updateStart= () => {
    
    return {
        type:t.UPDATE_ACCOUNT_START,
        
    };


}


export  const updateFail =(error) => {

    return {
        type:t.UPDATE_ACCOUNT_FAIL,
        error:error
    };

}



export  const updateSuccess =(message) => {
     
    return {
        type:t.UPDATE_ACCOUNT_SUCCESS,
        message:message
    };


}




export  const deleteStart= () => {
    
    return {
        type:t.DELETE_ACCOUNT_START,
        
    };


}


export  const deleteFail =(error) => {

    return {
        type:t.DELETE_ACCOUNT_FAIL,
        error:error
    };

}



export  const deleteSuccess =(message) => {
     
    return {
        type:t.DELETE_ACCOUNT_SUCCESS,
        message:message
    };


}





export const Update = (updateData) => {

    return dispatch => {
        dispatch(updateStart());
 
        axios.post("http://fungry.club/dev/API/entryPoint.php",updateData,
     {headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }}
    )
      .then( (reponse ) => {
              console.log(reponse);
              window.location.reload();
              dispatch(updateSuccess(reponse.data));
          }
      )
      .catch( (error) => {

         console.log(error);
        
         dispatch(updateFail(error.Error));

      })  

    };
}

export const Delete = (deleteaccount) => {

    return dispatch => {
        dispatch(deleteStart());
 
        axios.post("http://fungry.club/dev/API/entryPoint.php",deleteaccount,
     {headers : {
                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }}
    )
      .then((reponse ) => {
              console.log(reponse);
              window.location.reload();
              dispatch(deleteSuccess(reponse.data.message));
          }
      )
      .catch( (error) => {

         console.log(error);
        
         dispatch(deleteFail(error.Error));

      })  

    };
};



