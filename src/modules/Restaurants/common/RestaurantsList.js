import React, { Component } from 'react';
import {Link} from  'react-router-dom';


/**
 * @class Restaurantsheader component
 * @description Restauarant  header to  export  header  for the  restauarnts
 */


 const RestauarntsList =( props) => (
     
    
                 <div className="column is-half-tablet is-one-third-desktop hover-cusine">
                 <Link to={"/RestaurantProfile/" + props.id} >
                 <img  src={"http://fungry.club/dev/images/"+props.image}  className="listimage-default-size"  alt="fungry" />
                 </Link>
               <h2>
                   {props.title}
               </h2>
                <h3>
                    {props.cat} - {props.cat2} - {props.cat3}
                </h3>
                <p className="cuisine-color">
                £{props.price}
                </p>
                  
             
            
           </div>
         
     
                    
          

);

export default RestauarntsList;