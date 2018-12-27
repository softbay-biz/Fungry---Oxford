import React, { Component } from 'react';
import Restaurantdashboardheader from '../common/Restaurantdashboardheader';


/**
 * @class Restaurantdashboard  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Restaurantdashboard  extends Component {

    render(){
             
        return(
            <div>
            <Restaurantdashboardheader/>

        <section className="section-aboutus">
      <div className="container">
         <h1 className="aboutus-heading">
                      Dashboard
                      
                      
                  </h1>
          <div className="columns">
              <div className="column is-one-third">
                  
                  <div className="dashmenu">
                     <b>Orders</b>
                     <br/>
                     <br/>
                      <a className="button btn-fun-li dashbutton" href=""><b className="order-numb"> 1 </b> New orders</a>
                      <br/>
                      <br/>
                     <a className="button btn-fun-li dashbutton" href="">
                     <b className="order-numb"> 10 </b>
                     Pending orders</a>
                      <br/>
                      <br/>
                     <a className="button btn-fun-li dashbutton" href="">
                     <b className="order-numb"> 9 </b>
                     Ready orders</a>

                  </div>
                  
              </div>
               <div className="column is-one-third">
                  
                  
              </div>
               <div className="column is-one-third">
                  
                  <div className="dashmenu">
                     <h1>
                         contact us
                     </h1> 
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                       <br/>
                     <br/>
                     <br/>
                    
                     

                  </div>
                  
              </div>
             
          </div>
      </div>
  </section>
        </div>
        
        


       

        )

    }

}

export default Restaurantdashboard; 