import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';











export const authStart =() => {
      
      return {
          type :t.AUTH_START
      };

};





export  const authLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Expirationtime');
    localStorage.removeItem('persist:root_fungry_storage');
    

    return {
        type:t.AUTH_LOGOUT
    }
}

export const checkAuthTimeout= (expirationtime) => {

  return  dispatch => {
      setTimeout(() =>{
          dispatch(authLogout());

      },expirationtime*10000);
  };
};
export const Setpostcode= (postcode) => {

  return  dispatch => {
      dispatch(postCode(postcode))
  };
};



export const postCode = (postcode) => {
   
      return {
          type:t.POSTCODE,
          postcode:postcode
         
      };

};

export const authSuccess = (token,userId) => {
   
      return {
          type:t.AUTH_SUCCESS,
          token : token,
          userInfo:userId
      };

};


export  const  authFail = (error) => {

      return {
          type:t.AUTH_FAIL,
          error :error.error
      };
};


export const authCheckState = () => {
    return  dispatch => {
         const token = localStorage.getItem('Token');
        if(!token){
            dispatch(authLogout());
        } else {
            const expirationtime = new Date(localStorage.getItem('Expirationtime'));
            if(expirationtime <= new Date()){
                
                dispatch(authLogout());

            } else {
                //dispatch(authSuccess(token,"34343434"));
                
                dispatch(checkAuthTimeout((expirationtime.getTime()-new Date().getTime())/1000));
        } 
    };
 };
};

export const auth = (email,password) => {

     return dispatch => {
         dispatch(authStart());
         const authData ={
             requestName:btoa(btoa(btoa("authentification"))),
             data:{
            id:6,
             email:email,
             password:password
             }
         }
      axios.post("http://fungry.club/dev/API/entryPoint.php",authData,
       {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
       }})
       .then(
           reponse => {
            console.log(reponse);

               if(!reponse.data.message){
               const expirationDate = new Date(new Date().getTime() + 3600*1000); 
               localStorage.setItem('Token',reponse.data.token);
               localStorage.setItem('Expirationtime',expirationDate);
              dispatch(authSuccess(reponse.data.token,reponse.data));
           }else{
            var errors = {
                error: "Login failed, check password or email "
            }
            dispatch(authFail(errors));


        }
        }
      ).catch( error => {
         var errors ={
             error: "Login failed"
         } 

          dispatch(authFail(errors));
 
       })  

     };
};