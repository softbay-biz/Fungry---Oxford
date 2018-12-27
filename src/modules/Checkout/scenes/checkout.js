import React, { Component } from 'react';
import {Link}  from  'react-router-dom';
import { connect } from 'react-redux';
import RestauarantsChart from '../../Restaurantsprofile/common/RestaurantsChart';
import Cart from '../common/Cart';
import Stripe from '../common/stripe';
import * as actionscart from '../../Restaurantsprofile/actions';
import * as actionutile from '../../Utile/actions';
import * as actions from '../actions';
import  '../utils/main.css';

/**
 * @class Checkout  component
 * @description Checkout to  export  header  for the  restauarnts
 */


 class Checkout  extends Component {

          
  componentDidMount(){
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
     pageNum:1,
     fields: {
      delivery:'',
      address:'',
      note:"",
    }
    }
   
    this.onChange = this.onChange.bind(this);
    this.SubmitOrder = this.SubmitOrder.bind(this);


  };
  addState =()=>{
    let page = this.state.pageNum;
    page <= 2 ? this.setState({pageNum:page+1}):page;    
  }
  subState =()=>{
    let page = this.state.pageNum;
    page >= 2 ? this.setState({pageNum:page-1}):page; 
  }

  onChange(e){
    let fields = this.state.fields;
  fields[e.target.name] = e.target.value;
  this.setState({
    fields
  });
  }

  SubmitOrder(){

    let meal = {
      ...this.props.food,
     amount : (this.state.fields.delivery  === "Delivery" ? 50 + this.props.amount : this.props.amount),
     note : this.state.fields.note,
     
     time : this.props.time,
     date : this.props.date,
     ordertime: new Date().toLocaleTimeString()
     
    } 
    console.log(this.props.food);

    let mealCo =  this.props.food.items.map((x) =>{
      let amount = (this.state.fields.delivery  === "Delivery" ? 50 + this.props.amount : this.props.amount);
      let time = (this.props.time ? this.props.time + this.props.date : "ASAP");
      let Iteamid =parseInt(x.id);
      let Iteamquan = parseInt(x.quantity);
      let resto_id = null;
      let id = null;
      if(this.props.userInfo){
      id = parseInt(this.props.userInfo.id_members);
      resto_id = parseInt(this.props.food.resto_id);
      }

      return  [Iteamid,Iteamquan,"OX1 47D",id,resto_id,new Date().toLocaleTimeString(),time]
    
    });
   

  
          var formDataToSend = {
          requestName:btoa(btoa(btoa("addOrder"))),
          data:{
            ...mealCo
          }
      };

    this.props.Setfood(meal);
    this.props.SendOrder(formDataToSend);

    
  }





    render(){


        var Cartdata = this.props.cart ;
        var RestauarantsCarts ="";
       
 
        if(this.props.cart  === null) {
     
         RestauarantsCarts = 
         <Cart
         />
 
        }else {
             RestauarantsCarts = Cartdata.items.map((Cartdata) => (    
             <Cart
             {...this.props}
             key={Cartdata.quantity}
             name={Cartdata.productName}
             quantity={Cartdata.quantity}
             price={Cartdata.price}
             />
         ));
 
        }


        let  Checkout = <div>
        <h4>
        <b>
           <br/> 
           Please  Login  or Signup  to  able  to  continue.
            
        </b>
         
     </h4>
     <br/>
 
     <Link to="/Login" className="button btn-fun-co">Login in</Link>
     <Link to="/Register" className="button btn-fun-co checkout-padding-order">Sign up</Link>
     </div>


       if(this.props.isLoggedIn){

        Checkout =``;


       }
       let checkoutNav ="";
       if(this.props.isLoggedIn){
       checkoutNav =  
       
       <div className="steps-actions">
       <div className="steps-action">
         <a onClick={this.subState} data-nav="previous" className="button btn-fun-li-lg">Menu</a>
       </div>
       <div className="steps-action">
         <a onClick={this.addState} data-nav="next" className="button btn-fun-co btn-fun-li-lg">Payement</a>
       </div>
     </div>
       }


 
    

             
        return(
          <div>

     <section className="section-checkout-page section-sup">
        <div className="container">

 
  <div className="steps-content">
    




{Checkout}
    <div className={"step-content " + (this.state.pageNum <=1 && this.props.isLoggedIn ? "is-active":"")}>
      
      <div className="columns">
           
       <div className="column">
        <div >
         
            <div className="field">
  <div className="control">
  <label className="label">Delivery</label>

    <div className="select ">
      <select
      name="delivery"
      onChange={this.onChange}
      >
        <option value="Pickup">Pickup</option>
        <option value="Delivery">Delivery</option>
      </select>
    </div>
  </div>
</div>
        
        </div> 

         
<div className="info-padding">
         
          
        <div className="field">
        <label className="label">Personnals informations</label>
          <div className="control">
           
        <input placeholder="Enter your Address line 1"
        name="address"
        onChange={this.onChange}
        type="text" className="input"
        />

   
       </div>

        </div>
          
        <div className="field">
          <div className="control">
           
        <input placeholder="Enter your Address line 2"
        name="address"
        onChange={this.onChange}
        type="text" className="input"
        />

   
       </div>
       <br/>
          
        <div className="field">
          <div className="control">
           
        <input placeholder="Enter your Postcode"
        name="address"
        onChange={this.onChange}
        type="text" className="input"
        />      

   
       </div>

        </div>
          
        <div className="field">
          <div className="control">
           
        <input placeholder="Enter your City"
        name="address"
        onChange={this.onChange}
        type="text" className="input"
        />

   
       </div>
        </div>
        <label className="label">Payement</label>
        <div className="field">
            <script src="https://js.stripe.com/v3/"></script>
            
        </div>
<br/>
        
       </div>
       <p>
       Warning: if the new location entered is too far form
       <br/>
the one formerly entered, we may have to empty your basket
       </p>
          
       </div>


<div className="info-padding">
         
         <h1>
         Place order and pay
          </h1>
          <br/>
          
       
       <p>
      Happy with everything? You can now place your order.  Hungry for something else? Go back to your restaurant's menu.
<br/>
</p>
<br/>
        
       </div>

     

      




       </div>
       <div className="column is-one-third restaurant-food checkout-margin">
            <div className="food-types-food checkout-order ">
            <div>
              <h2>
                Your order from 
              </h2>
               <h1>
                 {}  
               </h1>
            </div>
            <hr/>

           
         
          {RestauarantsCarts}
       



            <hr/>
            <div>
            <textarea
            name="note"
            onChange={this.onChange}
            className="textarea" placeholder="Add a note for the restaurant"></textarea>

            </div>

            <hr/>
                <div className="columns is-mobile">
                    <div className="column-subtotal-lastcheckout">
                          
                            <strong>
                                Subtotal ({this.props.cart===null?" 0 ":this.props.cart.items.length} {this.props.cart===null?0:this.props.cart.items.length>1?" items":" item"}) : £{ 
                                  (this.props.amount ? this.props.amount :"")
                                 }
                             <br/>
                            </strong> 
                              <br/>
                              <br/>
                            <strong>
                                Delivery fees :  £0
                             <br/>
                            </strong> 
                               <br/><br/>
                            <strong>
                                Total : £{(this.props.amount ? this.props.amount :"") + (this.state.fields.delivery   === "Delivery" ? 50 :"") }
                             <br/>
                            </strong> 

                    </div>
                    <div className="column"></div>
                    <div className="column">
                       <strong>
                            
                       </strong>
                    </div>
                </div>
                
                    
               
                </div>
 
                
            </div>
        
      </div>

    </div>




 
  </div>


 
 <div>
   {checkoutNav}
  </div>
</div>
       
     
    </section>
    




          </div>


        )

    }

}

const mapStateToProps = state => {
    return {
    
    isLoggedIn:state.authReducer.token,
    cart:state.loadMenuReducer.cart,
    time:state.setReducer.time,
    date:state.setReducer.date,
    amount:state.setReducer.amount,
    userInfo:state.authReducer.userInfo,
    food:state.setReducer.food
    }
  };
  const mapDispatchToProps = dispatch => ({
  remele :()=>dispatch(actionscart.deleteCart()),
  checkout :(data)=>dispatch(actions.checkout(data)),
  removeElement :(productName)=>dispatch(actionscart.deleteElement(productName)),
  replaceCartEl :(name,price,quantity)=>dispatch(actionscart.replaceCart(name,price,quantity)),
  Setfood:(food)=>dispatch(actionutile.SetFood(food)),
  SendOrder :(food)=>dispatch(actionutile.SendOrder(food)),

  });

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);