import React, { Component } from 'react';
import {Link} from  'react-router-dom';





const TopResto =(props)=>{
    return(

    <div className="column is-full-mobile is-half-tablet is-one-third-desktop resto">
     <Link to={"/RestaurantProfile/" + props.id} >
                 <img  src={"http://fungry.club/dev/images/"+props.image}  className="listimage-default-size"  alt="fungry" />
                 </Link>  
  <h2>
      {props.name}
  </h2>
   <h3>
       {props.cat} - {props.cat2} - {props.cat3}
   </h3>
   <p>
     <b>{props.price}</b> 
   </p>
     
 </div>

    )



}





export default TopResto;