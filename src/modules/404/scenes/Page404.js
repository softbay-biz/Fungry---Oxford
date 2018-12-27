import React, { Component } from 'react';
import  {Link} from  'react-router-dom';

/**
 * @class Restaurantheader  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Page404 extends Component {


    
  componentDidMount() {
     

    var fadeTarget = document.getElementById("fadeffect");
    fadeTarget.style.display ="none";
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    var fadeTarget = document.getElementById("fadeffect");
    fadeTarget.style.display = "inherit";

  }

    render(){
             
        return(
           <div>


            <section className="section-aboutus">
              <div className="container">
          <div className="columns is-centered">
              <div className="column is-half">
              <Link to="/" >
                <img className="logo-regis-del  move-logo" src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
            </Link>
                 
                  <Link to="/" >
               
                   <h1 className="aboutus-heading">
                      404 page  not found 
                      
                      
                  </h1>
                </Link>
              
                  
                  <p className="page-404">
                    <strong>
                        Sorry  the  page you are  looking for does not  exist anymore ,
                        click  <Link to="/" className="a-color"> Here </Link>  to  go  back to  the home page

                    </strong>  
                 </p>
              </div>
          </div>
      </div>
  </section>

   
               
           </div>

        )

    }
}

export  default Page404;