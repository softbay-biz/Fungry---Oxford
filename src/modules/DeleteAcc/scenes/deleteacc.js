import React, { Component } from 'react';


/**
 * @class Restaurantheader  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Deleteacc extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
             
        return(
           <div>


             <section className="delete-account-section">
     <div className="container">
         <h1 className="delete-heading">Hey print(First name) , print(Last name)</h1>
       <div className="container">
           <div className="columns">
               <div className="column is-half">
                  <h1 className="delete-heading-title">
                      Would you like to  delete your account ?
                  </h1>
                  
                          <div className="field">
         <label className="label">Email address</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="E.g name@example.com" />
        <span className="icon is-small is-left">
         <i className="fas fa-envelope"></i>
          </span>
        
         </p>
        </div>
                  
                         
        <div className="field">
         <label className="label">Mobile Phone</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="E.g +447563978054" />
        
        
         </p>
        </div>                                   
              
            
            <div className="field ">
             <a href="" className=" button is-medium btn-fun-co-lg">
                 Update account
             </a>
          </div>     
                         
                
                    
                      
                   
               </div>
           </div>
           
           <hr />
           
           
           
           
           
          <div className="columns">
               <div className="column is-half">
                  <h1 className="delete-heading-title">
                      Would you like to  delete your account ?
                  </h1>
                  <p>
                      (if you choose  to do  so , we will  delete all  your personal  information 
from  our database)
                  </p>
                  
   
                  
                         
        <div className="field">
         <label className="label">Enter your password  to make  sure you are the  real FIRSTNAME LASTNAME</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="password" placeholder="**********" />
        
        
         </p>
        </div>                                   
              
            
            <div className="field ">
             <a href="" className=" button is-medium btn-fun-co-lg">
                 Delete your  account
             </a>
          </div>     
                         
                
                    
                      
                   
               </div>
           </div> 
           
           
       </div>
     
     </div>
 </section>
   
               
           </div>

        )

    }
}

export  default Deleteacc;