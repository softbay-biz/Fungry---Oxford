import React, { Component } from 'react';
import {Link}  from  'react-router-dom';

/**
 * @class Restaurantheader  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Restaurantheader  extends Component {

    render(){
             
        return(

            <div className="stick "  >
            <nav className="navbar sticky-nav-head ">
          
              <div className="container">
                     <div className="navbar-brand">
                      <a className="navbar-item" href="index.html">
                      <img className="sticky-logo-head " src={require('../../../assets/img/fungry-logo.png')} alt="" />
                    </a>
              </div>
               
          <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>       
               
                
          <div className="navbar-menu" id="navMenu">
          
          
         
          <div className="navbar-start">
           
          
        
         
          
          </div>
        
          <div className="navbar-end sticky-nav-position" >
                <div className="navbar-item">
                    <div className="control">
        <Link to="/loginclient" className="button  btn-fun-li ">SIGN IN</Link>
                 </div>
        
               </div>
                
              
          </div>
        </div>
                  
          </div>
              
              
        
        
         </nav>
          </div>
        )

    }

}

export  default Restaurantheader;