import React, { Component } from 'react';
import {Link} from  'react-router-dom';
import { connect } from 'react-redux';
import * as actiondash from '../actions';


/**
 * @class Restaurantdashboard  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Restaurantdashboard  extends Component {

    componentDidMount(){
              this.props.getaccounts();
             if(this.props.account_type.id_members !== undefined){
                 let id = parseInt(this.props.account_type.id_members)
              this.props.Orders(id);
             }
             window.scrollTo(0, 0);

             console.log(this.props.orders);

            //  var evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } ); 


    }





    render(){
        var restaurant_amount = 0;
        var delivery_amount =0;
        var orders_amount = 0;
        var delivery_amount =0;

        if(this.props.validation_accounts !== null && this.props.account_type.account_type === "account_manager" && this.props.validation_accounts.users !== undefined){
          restaurant_amount = Object.keys(this.props.validation_accounts.users.restaurant).length;
          delivery_amount = Object.keys(this.props.validation_accounts.users.delivery_person).length ;
          
        }

        if(this.props.validation_accounts !== null && this.props.account_type.account_type === "account_manager" && this.props.validation_accounts.users !== undefined){
          restaurant_amount = Object.keys(this.props.validation_accounts.users.restaurant).length;
          
        }
        if(this.props.orders !== null && this.props.account_type.account_type ==="restaurant"){
            orders_amount = Object.keys(this.props.orders).length;
          
        }
 


       let stats = "";
        if (this.props.account_type !== null ){
           if(this.props.account_type.account_type === "account_manager" && this.props.IsloginedIn){
            stats = (
                <div className="column is-one-third">
                  <h1>
                    Statistics
                  </h1>
                  <br/>
                  <br/>
                 <button className="button btn-fun-co">
                 Download Statistics
                 </button> 
                </div>
               )
              }

        }


        let restaurant_validate ="";
         if(this.props.account_type !== null){
              if(this.props.account_type.account_type === "restaurant" && this.props.IsloginedIn){
                restaurant_validate =(
                  
                    <div className="dashmenu">
                    <b>Orders</b>
                    <br/>
                    <br/>
                     <Link to="/manageorder" className="button btn-fun-li dashbutton" ><b className="order-numb"> {orders_amount} </b> New orders</Link>
                     <br/>
                     <br/>
                    <Link to="/manageorder" className="button btn-fun-li dashbutton" >
                    <b className="order-numb"> {orders_amount}  </b>
                    Pending orders</Link>
                     <br/>
                     <br/>
                   

                 </div>

                )
                 
             }
            }
             

            let account_manager_validate ="";
            if(this.props.account_type !== null){
                 if(this.props.account_type.account_type === "account_manager" && this.props.IsloginedIn){
                    account_manager_validate =(
                     
                       <div className="dashmenu">
                       <b>New Restaurnt  Profile Review</b>
                       <br/>
                       <br/>
                        <Link to="/manageaccount" className="button btn-fun-li dashbutton" ><b className="order-numb"> {restaurant_amount}</b> New restaurant profile</Link>
                        <br/>
                        <br/>
                       <Link to="/manageaccount" className="button btn-fun-li dashbutton" >
                       <b className="order-numb"> {delivery_amount}</b>
                       New delivery person profile</Link>
                        <br/>
                        <br/>
                    
   
                    </div>
   
                   )
                    
                }
            }





             
        return(
            <div>

        <section className="section-aboutus">
      <div className="container">
         <h1 className="aboutus-heading">
                      Dashboard
                      
                      
                  </h1>
          <div className="columns">
              <div className="column is-one-third">
                  
                    {account_manager_validate}
                    {restaurant_validate}
                  
              </div>
               <div className="column is-one-third">
                  
                  
              </div>
               <div className="column is-one-third">
                  
                  <div className="dashmenu">
                     <h1>
                         contact us
                     </h1> 
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     <br/>
                     
                    
                     

                  </div>
                  
              </div>
             
          </div>
     
          <div className="columns">
            {stats}

          </div>

     
      </div>
  </section>
        </div>
        
        


       

        )

    }

}
const mapStateToProps = state => {
    return {
    currentPage:state.pageReducer.page,
    IsloginedIn:state.authReducer.token,
    amount:state.loadMenuReducer.cart,
    account_type:state.authReducer.userInfo,
    validation_accounts:state.load_validate_Reducer.account,
    orders:state.load_validate_Reducer.orders
    }
  };
  const mapDispatchToProps = dispatch => ({
      getaccounts:() => dispatch(actiondash.validation()),
      Orders:(id) => dispatch(actiondash.Orders())
  });
  

export default connect(mapStateToProps,mapDispatchToProps)(Restaurantdashboard); 