import React, { Component } from 'react';
import {Link} from  'react-router-dom';





const TopCuisines =(props)=>{
    return(

    <div className="column is-full-mobile is-half-tablet is-one-third-desktop resto">
     <Link to={"/ListRestaurantsForCuisines/" + props.cat} >
                 <img  src={"http://fungry.club/dev/images/"+props.image}  className="listimage-default-size"  alt="fungry" />
                 </Link>  
   <h3>
       {props.cat}
   </h3>
     
 </div>

    )



}





export default TopCuisines;