import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions  from '../actions';

/**
 * @class Restaurantfood component
 * @description Restauarantfood to  export  header  for the  restauarnts
 */








 const Cart = (props ) =>(
          

                <div className="columns" >
                
                    <div className="column ">
                    
                    {props.quantity}
                       
                    
                    </div>
                    <div className="column is-one-third">
                        <strong>{props.name}</strong>
                        
                        <br/>
                         <strong>
                         </strong>
                       
                    </div>
                    <div className="column ">
                        <strong className="color">
                        £{props.price}
                        </strong>
                   
                    </div>

                </div>






                
              
           

  
)

const mapDispatchToProps = dispatch => ({
  });
  

export default  connect(null,mapDispatchToProps)(Cart);