import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';











export const validationStart =() => {
      
      return {
          type :t.LOAD_VALIDATION_START
      };

};

export const loadordersStart =() => {
      
      return {
          type :t.LOAD_ORDERS_START
      };

};



export const validationSuccess = (accounts) => {
   
      return {
          type:t.LOAD_VALIDATION_SUCCESS,
          accounts:accounts 
      };

};
export const loadordersSuccess = (orders) => {
   
      return {
          type:t.LOAD_ORDERS_SUCCESS,
          orders,
      };

};

export const validation_Account_Success = (message) => {
   
      return {
          type:t.ACCEPT_ACCOUNT,
          message:message
      };

};
export const delete_Account_Success = (message) => {
   
      return {
          type:t.DELETE_ACCOUNT,
          message:message
      };

};


export  const  loadordersFail = (error) => {

      return {
          type:t.LOAD_VALIDATION_FAIL,
          error :error
      };
};

export  const  validationFail = (error) => {

      return {
          type:t.LOAD_ORDERS_FAIL,
          error,
      };
};

export  const  validation_Account_Fail = (error) => {

      return {
          type:t.ACCEPT_ACCOUNT,
          message: error
      };
};
export  const  delete_Account_Fail = (error) => {

      return {
          type:t.DELETE_ACCOUNT,
          message: error
      };
};


export const validation = () => {

     return dispatch => {
         dispatch(validationStart());
         const validationData ={
             requestName:btoa(btoa(btoa("membersPendingValidation")))
             }
         
      axios.post("http://fungry.club/dev/API/entryPoint.php",validationData,
       {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
       }})
       .then(
           reponse => {
            console.log(reponse);

              dispatch(validationSuccess(reponse.data));
           
        }
      ).catch( error => {
          dispatch(validationFail(error));
        })  

     }
    }
export const Orders = (id) => {

     return dispatch => {
         dispatch(loadordersStart());
         const validationData ={
            requestName:btoa(btoa(btoa("getOrder"))),
          data:{
            id_restaurant:4
          }
             }
         
      axios.post("http://fungry.club/dev/API/entryPoint.php",validationData,
       {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
       }})
       .then(
           reponse => {
            
          

              dispatch(loadordersSuccess(reponse.data));
           
        }
      ).catch( error => {
          dispatch(loadordersFail(error));
        })  

     }
    }


    export const validation_account = (email) => {

        return dispatch => {
            dispatch(validationStart());
            var validate_data = {
                requestName:btoa(btoa(btoa("validateAccount"))),
                data:{
                  email:email,
                  elementName:"activation",
                  elementValue:1,
                }
                };

                console.log(validate_data);
           
            
         axios.post("http://fungry.club/dev/API/entryPoint.php",validate_data,
          {headers : {
           'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }})
          .then(
              reponse => {
               console.log(reponse);
   
                 dispatch(validation_Account_Success(reponse.data));
                
                 let EmailSend = {
                    requestName:btoa(btoa(btoa("sendMail"))),
                    data:{
                      to:"lewatt23@gmail.com",
                      from:"Fungry",
                      subject:"Fungry account",
                      message:"Hello ,We are here  to  informe you  that  your account have been Accepted.",
                    }
                    };


                 axios.post("http://fungry.club/dev/API/entryPoint.php",EmailSend,
          {headers : {
           'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }})


              
           }
         ).catch( error => {
             dispatch(validation_Account_Fail(error));
           })  
   
        }
       }

    export const delete_account = (email) => {

        return dispatch => {
            dispatch(validationStart());
            var validate_data = {
                requestName:btoa(btoa(btoa("deleteAccount"))),
                data:{
                  email:email,
                  id:5
                }
              };
            
         axios.post("http://fungry.club/dev/API/entryPoint.php",validate_data,
          {headers : {
           'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }})
          .then(
              reponse => {
               console.log(reponse);
   
                 dispatch(delete_Account_Success(reponse.data));
                let EmailSend = {
                    requestName:btoa(btoa(btoa("sendMail"))),
                    data:{
                      to:"lewatt23@gmail.com",
                      from:"Fungry",
                      subject:"Fungry account",
                      message:"Hello ,We are sorry to  informe you  that  your account have been rejected.",
                    }
                    };


                 axios.post("http://fungry.club/dev/API/entryPoint.php",EmailSend,
          {headers : {
           'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }})



              
           }
         ).catch( error => {
             dispatch(delete_Account_Fail (error));
           })  
   
        }
       }