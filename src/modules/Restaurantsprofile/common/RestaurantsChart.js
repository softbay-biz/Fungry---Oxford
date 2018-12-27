import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions';

/**
 * @class Restaurantfood component
 * @description Restauarantfood to  export  header  for the  restauarnts
 */

const Restocart =(props) =>{
  
     if(props.name){
         return (
    <div class="basket-remove-element">
            <a onClick={(e)=>{
                e.preventDefault();
                props.removeElement(props.name)}}
                 className="color remove-button">Remove </a>
    </div>
         );
     }
     else {
         return null;
     }

}
const Restoinput=(props) =>{
  
    if(props.name){
        return (

            <input onChange={
                (e)=>{
                    props.replaceCartEl(props.name,props.price,e.target.value);
                                    }}
             className="input" type="number" min="1"  value={props.quantity} placeholder={props.quantity}/>

        );
    }
    else {
        return null;
    }

}







class RestauarntsChart extends Component {
          

RenderDiv(){

    if(this.props.name){
    return(
        <div class="basket-block-element">
        <div className="columns ">
       
        <div className="column ">
      
        <Restoinput
                namer ={this.props.name}
                {...this.props}
                />
           
           </div>
            <div className="column is-one-third">
            <div class="basket-dish-name">
                <div class="basket-dish-name2">{this.props.name}</div>
                <Restocart 
                      namer ={this.props.name}
                      {...this.props}
                      />

                </div>
                

                                     
            </div>
            <div className="basket-price">
            <strong className="color my-color-float">
                £{this.props.price}
                </strong>
            </div>
        </div>
        </div>
    )
    }else{
        return(
            <div></div>
        );
    }
}    

render(){

   
    
  
   return(
       <div>
     {this.RenderDiv()}
     </div>
   )
}




                
    
}

const mapDispatchToProps = dispatch => ({
    replaceCartEl :(name,price,quantity)=>dispatch(actions.replaceCart(name,price,quantity))
  });
  

export default  connect(null,mapDispatchToProps)(RestauarntsChart);