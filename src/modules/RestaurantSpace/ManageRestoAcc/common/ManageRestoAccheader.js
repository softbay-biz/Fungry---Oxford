import React, { Component } from 'react';


/**
 * @class Restaurantheader  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class ManageRestoAccheader  extends Component {

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
<a href="Login.html" className="button  btn-fun-li ">Emergency stop</a>
         </div>

       </div>
        <div className="navbar-item">
        <div className="control">
<a  href="Register.html" className="button  btn-fun-co">My account</a> 
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


export default ManageRestoAccheader;