import React, { Component } from 'react';


/**
 * @class Restaurantmenu component
 * @description Restauarant profile header to  export  header  for the  restauarnts
 * 
 * 
 * 
 */



const anchor_menu = (e)=>{
  if(e.target.id === "anchor_starter"){
    let anchor = document.getElementById("Starter");
    anchor.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }else if(e.target.id === "anchor_main"){
     let anchor = document.getElementById("Main");
    anchor.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }else if(e.target.id === "anchor_dessert"){
     let anchor = document.getElementById("Dessert");
    anchor.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }else if(e.target.id === "anchor_sides"){
     let anchor = document.getElementById("Sides");
    anchor.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
  }
};


 const Restauarntsmenu =( props) => (
        <div>
             
   <div className="section-restaurants-food" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(http://fungry.club/dev/images/"+(props.image?props.image:"dish-default-image.png")+")"}}>
       <div className="container">
           <div className="columns">
               <div className="column">
                  <div className="restaurant-info">
                     <h1>
                          {props.name}
                     </h1>
                     <h2>
                         {props.cat} - {props.cat1} - {props.cat2}
                     </h2>
                     <h3>
                      <p className="money-class">
                      £ {props.price}
                        </p>
                     </h3>            
                  </div>
                   
               </div>
               <div className="column"></div>
           </div>
       </div>
       
   </div>
    




<div className="section-restauant-food-menu " id="is-fixed-top-by-scroll">
    <div>
     <div className="nav-bar">
    
        <div className="navbar-menu food-type-menu ">
            <div className="items-of-nav ">
              <ul>
                <li className="navbar-item">
                  <a>Most ordered</a>
                </li>
                <li className="navbar-item">
                  <a id="anchor_starter" onClick={anchor_menu}>Starter</a>
                </li>
                <li className="navbar-item">
                  <a id="anchor_main" onClick={anchor_menu}>Main</a>
                </li>
                <li className="navbar-item">
                  <a id="anchor_dessert" onClick={anchor_menu}>Dessert</a>
                </li>
                <li className="navbar-item">
                  <a id="anchor_sides" onClick={anchor_menu}>Sides</a>
                </li>
              </ul> 
             
            </div>

           
        </div>
      </div>
     </div>
     </div>
</div>

);



export default Restauarntsmenu;