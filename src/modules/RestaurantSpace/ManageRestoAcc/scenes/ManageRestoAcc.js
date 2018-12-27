import React, { Component } from 'react';


/**
 * @class ManageRestoAcc  component
 * @description ManageRestoAcc  to  export  header  for the  restauarnts
 */


 class ManageRestoAcc  extends Component {

    render(){
             
        return(
            <div>
             <ManageRestoAccheader/>

             <section className="manage-res-account">
    <div className="container">
        <h1 className="manage-res-heading-top">Manage your restaurant's account</h1>
         <div className="columns">
             <div className="column is-half">
                 <h1 className="manage-res-activity">Your restaurant's activity</h1>
                 
                 <div className="control">
                      <label className="radio">
                         <input type="radio" name="answer" />
                               Accept Orders
                       </label>
              
                 </div>
                 
                 <br />
                  <div className="control">
                      <label className="radio">
                         <input type="radio" name="answer" /> 
                               Decline orders
                       </label>
                       
                       <input className="input mange-res-acc-input is-small" type="text" placeholder="1" />
                       <label for="text">hour(s)</label>
                 </div>
                 
                 <br/>
                 <br/>
                 <a href="" className="button btn-fun-co-lg">Update activity</a>
         </div>
    </div>
    
           <div className="columns mange-rest-padding">
             <div className="column is-half">
                 <h1 className="manage-res-activity">Your restaurant's activity</h1>
                 
                              <br/>
        <div className="field">
         <label className="label">Restaurant name</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="E.g Lydia" />
        
        
         </p>
        </div>
                  
         <div className="field">
         <label className="label">Phone </label>
            <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="E.g +447563978054" />
        
        
         </p>
        </div>
                  
        <div className="field">
         <label className="label">Address line 1 </label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="e.g .." />
        <span className="icon is-small is-left">
         <i className="fas fa-envelope"></i>
          </span>
        </p>
        </div>          
                  
         <div className="field">
         <label className="label">Address line 2</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="e.g .."/>
        
        
         </p>
        </div>
                  
        <div className="field">
         <label className="label">City</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="Oxford" />
        
        
         </p>
        </div>  
             
          <div className="field">
         <label className="label">Postcode</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" type="text" placeholder="E.g OX14LG" />
        
        
         </p>
        </div>                                      
                                                                                                                
              
            
            <div className="field ">
             <a href="" className=" button btn-fun-co-lg">
                 Update details
             </a>
          </div>                        
        
         </div>
    </div>
    
    
    
</div>
</section>


            </div>
        )
    }
}


export  default  ManageRestoAcc;