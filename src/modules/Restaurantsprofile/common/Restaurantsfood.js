import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import {modal} from '../utils/modal'; 



/**
 * @class Restaurantfood component
 * @description Restauarantfood to  export  header  for the  restauarnts
 */

var amtvalue;


 const HandleChange =(e) =>{
   

     amtvalue = e.target.value;
   if(amtvalue < 1 || amtvalue === undefined){
    amtvalue = 1;

   }



 }

 const CallModal =(props) => {
   
  return(
  
<div id="modal-menu-list" className="modal" data-price={props.price}>
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">{props.name}</p>
      <button className="delete" id="close" aria-label="close"></button>
    </header>
    <div className="modal-card-body">
    <div className="columns">
                    <div className="column is-one-third">
                        
                      <input className="input"
                      onChange={HandleChange}
                      type="number" id="number" min="1" name="amount" defaultValue="1" />
   
                    </div>
                    <div className="column is-one-third is-vcentered">
                        {props.names}
                        
                       
                    </div>
                    <div className="column is-one-third">
                        <strong className="color">
                            £{props.price} (for 1 item) 
                        </strong>
                    </div>
                </div>

    </div>
    <footer className="modal-card-foot">
      <button onClick={()=>{
        if(amtvalue < 1 || amtvalue === undefined || amtvalue === null){
          amtvalue = 1;
      
         }

        props.addmenu(props.name,amtvalue,props.price,props.id);
      }} className="button btn-fun-co" id="close-btn-btn">Add to basket</button>
      <button className="button btn-fun-li" id="close-btn">Cancel</button>
    </footer>
  </div>
</div>

    )
 }








const  MenuList = (props) => (
  <div onClick={modal} id="custom_card_dish" class="card custom_card_dish">
                        <div class="card-image card-image-menu-list">
                          <figure class="image is-4by3">
                            <img className="image is-96x96" src={"http://fungry.club/dev/images/dish_image_800px/"+props.picture}
              alt=""
              />
                          </figure>
                        </div>
                        <div class="card-content">
                          <div class="content">
                              {props.name}
                            <br/>
                            <time class="dish_price_color">£{props.price}</time>
                          </div>
                        </div>
                        <CallModal
                                   {...props}
                                   />
                      </div>

); 

const Restaurant_Starter = (props) => {
  var Mydata = Object.assign({},props.Menu); 
  var menudeatils ="Loading ...";
 
  
  if(props.Menu !== null  && props.Menu !== undefined){ 
      for(let i in Mydata){
        if(Mydata[i].id_sub_sub_sub_category !== "Starter"){
          delete Mydata[i];
        }

      }
  menudeatils =  Object.values(Mydata).map((Mydata) => (

    <MenuList
      key={Mydata.id}
      id={Mydata.id}
      price={Mydata.price}
      picture={Mydata.image}
      names={Mydata.Menulast}
      name={Mydata.name}
     
      cat={Mydata.id_category}
      cat_sub={Mydata.id_sub_category}
      cat_sub_sub={Mydata.id_sub_sub_category}
      cat_sub_sub_sub={Mydata.id_sub_sub_sub_category}
      {...this.props}
      {...props}
      
     />
    
  ));
  }
  return  menudeatils;
}
const Restaurant_Main = (props) => {
  var Mydata = Object.assign({},props.Menu); 
  var menudeatils ="Loading ...";
 
  
  if(props.Menu !== null  && props.Menu !== undefined){ 
      for(let i in Mydata){
        if(Mydata[i].id_sub_sub_sub_category !== "Main"){
          delete Mydata[i];
        }

      }
  menudeatils =  Object.values(Mydata).map((Mydata) => (

    <MenuList
      key={Mydata.id}
      id={Mydata.id}
      price={Mydata.price}
      picture={Mydata.image}
      names={Mydata.Menulast}
      name={Mydata.name}
     
      cat={Mydata.id_category}
      cat_sub={Mydata.id_sub_category}
      cat_sub_sub={Mydata.id_sub_sub_category}
      cat_sub_sub_sub={Mydata.id_sub_sub_sub_category}
      {...this.props}
      {...props}
      
     />
    
  ));
  }
  return  menudeatils;
}
const Restaurant_Dessert = (props) => {
  var Mydata = Object.assign({},props.Menu); 
  var menudeatils ="Loading ...";
 
  
  if(props.Menu !== null  && props.Menu !== undefined){ 
      for(let i in Mydata){
        if(Mydata[i].id_sub_sub_sub_category !== "Dessert"){
          delete Mydata[i];
        }

      }
  menudeatils =  Object.values(Mydata).map((Mydata) => (

    <MenuList
      key={Mydata.id}
      id={Mydata.id}
      price={Mydata.price}
      picture={Mydata.image}
      names={Mydata.Menulast}
      name={Mydata.name}
     
      cat={Mydata.id_category}
      cat_sub={Mydata.id_sub_category}
      cat_sub_sub={Mydata.id_sub_sub_category}
      cat_sub_sub_sub={Mydata.id_sub_sub_sub_category}
      {...this.props}
      {...props}
      
     />
    
  ));
  }
  return  menudeatils;
}
const Restaurant_Sides = (props) => {
  var Mydata = Object.assign({},props.Menu); 
  var menudeatils ="Loading ...";
 
  
  if(props.Menu !== null  && props.Menu !== undefined){ 
      for(let i in Mydata){
        if(Mydata[i].id_sub_sub_sub_category !== "Sides"){
          delete Mydata[i];
        }

      }
  menudeatils =  Object.values(Mydata).map((Mydata) => (

    <MenuList
      key={Mydata.id}
      id={Mydata.id}
      price={Mydata.price}
      picture={Mydata.image}
      names={Mydata.Menulast}
      name={Mydata.name}
     
      cat={Mydata.id_category}
      cat_sub={Mydata.id_sub_category}
      cat_sub_sub={Mydata.id_sub_sub_category}
      cat_sub_sub_sub={Mydata.id_sub_sub_sub_category}
      {...this.props}
      {...props}
      
     />
    
  ));
  }
  return  menudeatils;
}
 const Restauarntsfood = (props ) =>(
            <div className="column">
            <label id="Starter" class="label label_custom_dish">Starter</label>
              <div id="display_starter" class="block_menu_type">  
                <Restaurant_Starter
                   Menu = {props.Menu}
                    {...props}
                  />
              </div>
            <label id="Main" class="label label_custom_dish">Main</label>
              <div id="display_main" class="block_menu_type">
                <Restaurant_Main
                   Menu = {props.Menu}
                    {...props}
                  />
              </div>
            <label id="Dessert" class="label label_custom_dish">Dessert</label>
              <div id="display_dessert" class="block_menu_type">
              <Restaurant_Dessert
                   Menu = {props.Menu}
                    {...props}
                  />
              </div>
            <label id="Sides" class="label label_custom_dish">Sides</label>
              <div id="display_sides" class="block_menu_type">
              <Restaurant_Sides
                   Menu = {props.Menu}
                    {...props}
                  />
              </div>
              <div >
               <h3 className="food-types-head">
                {props.name}
               </h3>
                <div >
                <div class="container-food-list">
                    
                </div>
                </div>
                
  

              </div>

            </div>

);

const mapDispatchToProps = dispatch => ({
  remele :()=>dispatch(actions.deleteCart())
});



export default connect(null,mapDispatchToProps)(Restauarntsfood);