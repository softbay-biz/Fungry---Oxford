import * as t from './actionTypes';
import  axios from  'axios';
import * as api from './api';











export const resetStart =() => {
      
      return {
          type :t.RESET_START
      };

};




export const resetSuccess = (message) => {
   
      return {
          type:t.RESET_SUCCESS,
         message,
      };

};


var senderemail ="";

export const Reset = (email) => {

     return dispatch => {
         dispatch(resetStart());
        let date = new Date();
        let code = (parseInt(date.getTime()) - parseInt(Math.floor((Math.random() * 40000000000) + 100000000)))*3;

        senderemail = email;

        let EmailSend = {
            requestName:btoa(btoa(btoa("sendMail"))),
            data:{
              to:email,
              from:"Fungry",
              subject:"Fungry account password",
              message:"Hello ,here  is your recovery code: " + " "+ code,
            }
            };


         axios.post("http://fungry.club/dev/API/entryPoint.php",EmailSend,
            {headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }})
       .then(
           reponse => {

               
               localStorage.setItem('code_reset',code);
               //
               setTimeout(function()
                          { 
                            localStorage.setItem('code_reset',0); 
                }, 900000);
               //
              dispatch(resetSuccess("CODE SENT !"));
         

        
        }
      ).catch( error => {
         
         
 
       })  

     };
};

export const ResetPassword = (codes,password,emairl) => {

     return dispatch => {
         dispatch(resetStart());
        
        let localcode = localStorage.getItem('code_reset');
    
           var mypass = password;

  if(localcode === codes){
   var updatedatas ={
        requestName:btoa(btoa(btoa("updateDetails"))),
        data:{
		id:0,
          's':["password",mypass],
          email:senderemail
         
        }
    }


         axios.post("http://fungry.club/dev/API/entryPoint.php",updatedatas,
            {headers : {
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
            }})
       .then(
           reponse => {

         
               
              dispatch(resetSuccess("Password updated"));
         

        
        }
      ).catch( error => {
         
        dispatch(resetSuccess("password no updated , check your reset code"));
 
       })  

     }else{
        dispatch(resetSuccess("password no updated , check your reset code or the code has expired!"));
     }
    }
};