import React, { Component } from 'react';
import {Link} from  'react-router-dom';

/**
 * @class Footer
 * @description Footer  page shared by all interface/views
 */


class Footer  extends Component {

    render(){

        return (
          
   <div>


  <footer className="footer" id="footer1">
  <div className="container">
  
  <div className="columns">
      <div className="column footer-logo logo-foot">
          <img src={require('../../assets/img/fungry-logo.png')} width="150" alt="" />
      </div>
  </div>
  
  
   <div className="columns">
       <div className="column">
           <ul className="footer-first">
               <li>
                  <Link to="/">
                      About us
                  </Link> 
               </li>
                  
                <li>
            <Link to="/RegisterRestaurant">
                Your Restaurant on Fungry 
            </Link>            
           </li>
           <li>
              <Link to="/RegisterDelivery">
                  Deliver with  Fungry
              </Link> 
           </li>
           </ul>
       </div>
       <div className="column">
           <ul className="footer-seconde">
               <li>
                  <Link to="/">
                            Privacy
                  </Link>
               </li>
               <li>
                  <Link to="/">
                      Site Map 
                  </Link>
               </li>
               <li>
                   <Link to="/">
                       Terms and conditions
                   </Link>
               </li>
           </ul>
           
           
           
           
           
           
           
           
           
           
       </div>
       <div className="column">
           <ul className="footer-third">
               <li>
                  <Link to="/Contactus">
                     Contact us  
                  </Link>
               </li>
               <li>
                    <Link to="/">
                        Faqs
                    </Link>
               </li>
               <li>
                   <Link to="/Cookies">
                       Cookies
                   </Link>
               </li>
           </ul>
       </div>
   </div>

  </div>
   
</footer>
 <section className="footer-bottom">
      <p className="footer-bottom-left" >
     ©Fungry2018
      </p>
      </section>
      </div>
  

        )
    }


}


export default Footer;