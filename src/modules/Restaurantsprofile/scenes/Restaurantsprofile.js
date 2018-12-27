import React, { Component } from 'react';
import Restauarntsmenu from '../common/Restaurantsmenu';
import Restauarntsfood from '../common/Restaurantsfood';
import RestauarantsChart from '../common/RestaurantsChart';
import * as actions from  '../actions';
import * as actionsdish from  '../../RestaurantsAminprofile/actions';
import * as actionutile from '../../Utile/actions';

import { connect } from 'react-redux';
import {Link} from  'react-router-dom';

var Menudata =  require('../common/MenuJson.json');
var listenForOverlap = require('element-overlap').listenForOverlap;

/**
 * @class Restaurantsprofile component
 * @description Restauarant profile header to  export  header  for the  restauarnts
 */


 class Restauarntsprofile  extends Component {

       state = {
           data:null
       }
    


    componentDidMount(){
        window.scrollTo(0, 0);
        var resto_id =this.props.match.params.id;
        this.props.onloadMenu(this.props.match.params.id);
       
       let id = parseInt(this.props.match.params.id);
        this.props.GetDish(id );
        this.props.remele();





        // // listenForOverlap(
        //     '#fix-footer', '#footer1', 
        //     function() {
        //         alert('The elements have overlapped!');
        //     },
        //    {
        //     contain: 'contain'
        //    }
        // );


        
      
        window.onscroll = function() {
        

            var fix = document.getElementById("fix-footer");
            var nav = document.getElementById("is-fixed-top-by-scroll");
            let options = {
                            root: null,
                            rootMargin: '500px',
                            threshold: 1
                          }           
       var basketElement = document.getElementById("scroll-bar-check-pro");
       window.onscroll = function() {
         if (window.pageYOffset > 400) {
            nav.classList.add("sticky0");
          } else {
            nav.classList.remove("sticky0");
          }
         if (window.pageYOffset > 566) {
            fix.classList.add("sticky2");
          } else {
            fix.classList.remove("sticky2");
          }
          if (window.pageYOffset > 800) {
              basketElement.style.height = "60px";
            
          }

      };
      }






        

      }

      componentWillUnmount(){

      let checkout = {
          resto_id :this.props.match.params.id,
          ...this.props.cart
      }
      this.props.Setfood(checkout);
   
      }
    
    changeposition =()=>{
    
   
    
    }

    

    render(){


        var data = this.props.data ;
       var Restauarntsmenus ="";

       if(data === null){
    
         Restauarntsmenus = 
        <Restauarntsmenu
             
        />


       }else {
         Restauarntsmenus = 
        <Restauarntsmenu
        {...this.props}
         key={data.id}
         price={data.prices}
         name={data.restaurant_name}
         currency={data.prices}
         cuisine={data.postcode}
         cat={data.list_category[0]}
         cat1={data.list_category[1]}
         cat2={data.list_category[2]}
         cat3={data.list_category[3]}
         image={data.image}
         
        
             
        />
        

    

         



       }
       var Cartdata = this.props.cart ;
       var cartitems =0;
       var RestauarantsCarts ="";
       

       if(this.props.cart  === null) {
         let count=1 ;     
         cartitems =0;
        RestauarantsCarts = 
        <RestauarantsChart
        count={count}

        />

       }else {
            let count =2;
            if(this.props.cart.items.length >= 1){
              for(let i=0;i<this.props.cart.items.length;i++){
                cartitems += parseInt(this.props.cart.items[i].quantity);               
              }
            }             
            RestauarantsCarts = Cartdata.items.map((Cartdata) => (    
                
            <RestauarantsChart
            {...this.props}
            key={Cartdata.productName}
            name={Cartdata.productName}
            quantity={Cartdata.quantity}
            price={Cartdata.price}
            count={count}
            />
        ));

       }

       let totalamounts = [];
       let amt=0;
       let b=0;
       if(this.props.cart !== null){
             if(this.props.cart.items.length !== 0){
                totalamounts.push(this.props.cart.items.map((x) =>{
                    let price = x.price.replace("£","");
                    let prices =  parseFloat(price);
                    let q =  parseInt(x.quantity);
                    let  amt=0;
                     amt = q*prices;

                    return amt;
                }));
                }
               
                for(var i in totalamounts["0"]) { amt  += totalamounts["0"][i]; }
                
      //  amt = totalamounts.reduce(function(totalamounts, b) { return totalamounts + b; }, 0);
          
       }
       this.props.SetAmount(amt);
       




       var  affiche =(<div className="column">
                          
       

          </div>
        );
       if(this.props.cart === null ){

          affiche =(
            <div className="column text-cart">
                <p>Add items  to your basket  and they will  appear here.</p> 
         </div>
    

          )
       }else {
           if(this.props.cart.items.length !== 0){

            affiche =(
                <div>
                <div className="columns basket-colum-total">
                  
                <div className="column basket">
                          <strong>
                              Subtotal
                           ({cartitems} {cartitems>1?" items":" item"}) 
                          </strong> 

                  </div>
                
                  <div className="column column-subtotal">
                  <div className="my-color-float">
                  £{amt}
                  </div></div>
                  
              </div>
              </div>

                
            )
           }
       }
      
    
       
    
        
        


        return(
           <div>
              
              {Restauarntsmenus }
          
          <section>
             
          <div className="section-restaurant-food-types " >
             <div className="container">
                  
            <div className="columns fixed-column">    
               <Restauarntsfood
                Menu = {this.props.menu}
                { ...this.props}
                />


            <div className="column is-one-third restaurant-food">
            <div className=" food-types-food checkout-order " id="fix-footer">
            <div className="my-center">
            <Link
             
            to="/checkout" className="is-expanded button  btn-fun-co">Checkout</Link>
           

            </div>
            
           
     <br/>

         
         <div id ="scroll-bar-check-pro" className="scroll-bar-check-pro basket">
          {RestauarantsCarts}
          </div>
         
    

         {affiche}
                    
               
                
                </div>
 
                
            </div>

           </div>
           </div>
           </div>
            </section>

           </div>

        )


    }
    

}

const mapStateToProps = state => {
    return {
    loading:state.loadMenuReducer.loading,
    autherror:state.loadMenuReducer.error,
    data:state.loadMenuReducer.data,
    cart:state.loadMenuReducer.cart,
    menu:state.adminProfileReducer.menu,
    amount:state.setReducer.amount
    }
  };
 
   const mapDispatchToProps = dispatch => ({
     onloadMenu: (id) => dispatch(actions.Load_Menu_Restaurant(id)),
     addmenu :(productName,quantity,price,id) => dispatch(actions.addTocart(productName,quantity,price,id)),
     getItems :() =>dispatch(actions.getCart()),
     remele :()=>dispatch(actions.deleteCart()),
     removeElement :(id)=>dispatch(actions.deleteElement(id)),
     replaceCartEl :(name,price,quantity,id)=>dispatch(actions.replaceCart(name,price,quantity,id)),
     SetAmount:(Amount)=>dispatch(actionutile.SetAmount(Amount)),
     GetDish: (id) => dispatch(actionsdish.GetDish(id)),
     Setfood:(food)=>dispatch(actionutile.SetFood(food))

   });


export  default connect(mapStateToProps,mapDispatchToProps)(Restauarntsprofile);