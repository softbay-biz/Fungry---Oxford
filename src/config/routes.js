import React, {Component } from 'react';
import Home from '../modules/Home/scenes/Home';
import ListRestaurants from '../modules/Restaurants/scenes/ListRestaurants';
import ListRestaurantsForCuisines from '../modules/Restaurants/scenes/ListRestaurantsForCuisines';
import Restauarntsprofile from '../modules/Restaurantsprofile/scenes/Restaurantsprofile';
import { Route,BrowserRouter, NavLink, Switch, Redirect } from 'react-router-dom';
import  Footer from  '../components/Footer/Footer';
import  Registerclient from '../modules/Registerclient/scenes/Registerclient';
import Loginclient from '../modules/Loginclient/scenes/Loginclient';
import ForgotPass from '../modules/ForgotPass/scenes/ForgotPass';
import Checkout from '../modules/Checkout/scenes/checkout';
import Deliverypersonregister from '../modules/Deliveryperson/scenes/deliverypersonregister';
import Restaurantreginfo from '../modules/Restaurant/scenes/Restaurantreginfo';
import ManageOrder from '../modules/ManageOrders/scenes/ManageOrder';
import ManageAccount from '../modules/ManageAccount/scenes/ManageAccount';
import Deleteacc from '../modules/DeleteAcc/scenes/deleteacc';
import Accountprofile from '../modules/profile/scenes/profile';
import Page404 from '../modules/404/scenes/Page404';
import Restaurantdashboard from '../modules/Restaurantdashboard/scenes/Restaurantdashboard';
import Contactus from '../modules/Contactus/scenes/contactus';
import Cookies from '../modules/Cookies/scenes/cookies';
import  {Bulma}  from '../assets/js/main';
import  Header from  '../components/Header/Header';
import { connect } from 'react-redux';

import RestaurantProfile from  '../modules/Restaurantsprofile/scenes/Restaurantsprofile'
import RestaurantsAdminprofile from  '../modules/RestaurantsAminprofile/scenes/RestaurantsAdminprofile'


//router file


class Routes extends Component{
        
    componentDidMount(){
        Bulma();
      }

    render() {

        let routes = (
            <Switch> 

                <Route  exact={true}  path="/"  component={Home} />
                <Route  exact={true} path="/Register" component={Registerclient} />
                <Route  exact={true} path="/Login" component={Loginclient} />
                <Route  exact={true} path="/ForgotPass" component={ForgotPass} />
                <Route  exact={true} path="/RegisterDelivery" component={Deliverypersonregister} />
                <Route   exact={true} path="/RegisterRestaurant" component={Restaurantreginfo} />
                <Route   exact={true} path="/Restaurant" component={Restauarntsprofile} />
                <Route  exact={true} path="/Contactus" component={Contactus} />
                <Route  exact={true} path="/Cookies" component={Cookies} />
                <Route  exact={true} path="/RestaurantProfile/:id" component={RestaurantProfile  } />
                <Route  exact={true} path="/ListRestaurantsForCuisines/:category" component={ListRestaurantsForCuisines} />
                <Route  exact={true} path="/ListRestaurants/:zipcode" component={ListRestaurants} />


              
                <Route  exact={true} path="/checkout" component={Checkout}/>
                
                <Route  component={Page404}/>

            </Switch>
    
        );

        if(this.props.IsloginedIn){
            routes = (
                         

                <Switch> 

                <Route exact path="/"  component={Home} />
                <Route path="/Register" component={Registerclient} />
                
                <Route path="/Login" component={Loginclient} />
                <Route exact path="/RegisterDelivery" component={Deliverypersonregister} />
                <Route path="/RegisterRestaurant" component={Restaurantreginfo} />
                <Route path="/Restaurant" component={Restauarntsprofile} />
                <Route exact  path="/Contactus" component={Contactus} />
                <Route exact  path="/Cookies" component={Cookies} />

                <Route path="/RestaurantProfile/:id" component={Restauarntsprofile} />

                <Route path="/ListRestaurantsForCuisines/:category" component={ListRestaurantsForCuisines} />
                <Route path="/ListRestaurants/:zipcode" component={ListRestaurants} />
                <Route path="/checkout" component={Checkout}/>
                <Route path="/Usr_prof" component={Accountprofile}/>




                <Route path="/deleteacc"  component={Deleteacc} />
                <Route path="/dashres" component={Restaurantdashboard} />
                
                
                <Route  component={Page404}/>

            </Switch>


                


            )
        }
      if(this.props.account_type !== null){
        if(this.props.IsloginedIn && this.props.account_type.account_type === "restaurant"){
            routes = (
                         

                <Switch> 

                <Route exact path="/"  component={Home} />
                <Route path="/Register" component={Registerclient} />
                <Route path="/Login" component={Loginclient} />
                <Route exact path="/RegisterDelivery" component={Deliverypersonregister} />
                <Route path="/RegisterRestaurant" component={Restaurantreginfo} />
                <Route path="/Restaurant" component={Restauarntsprofile} />
                <Route exact  path="/Contactus" component={Contactus} />
                <Route  exact path="/Cookies" component={Cookies} />

                <Route path="/RestaurantProfile/:id" component={Restauarntsprofile} />
                <Route path="/RestaurantAdminProfile" component={RestaurantsAdminprofile} />

                <Route path="/ListRestaurantsForCuisines/:category" component={ListRestaurantsForCuisines} />
                <Route path="/ListRestaurants/:zipcode" component={ListRestaurants} />
                <Route path="/checkout" component={Checkout}/>
                <Route path="/Usr_prof" component={Accountprofile}/>




                <Route path="/manageorder" component={ManageOrder} />
                <Route path="/deleteacc"  component={Deleteacc} />
                <Route path="/dashres" component={Restaurantdashboard} />
                
                
                <Route  component={Page404}/>

            </Switch>


                


            )
        }
    }
      if(this.props.account_type !== null){
        if(this.props.IsloginedIn && this.props.account_type.account_type === "account_manager"){
            routes = (
                         

                <Switch> 

                <Route exact path="/"  component={Home} />
                <Route path="/Register" component={Registerclient} />
                <Route path="/Login" component={Loginclient} />
                <Route exact path="/RegisterDelivery" component={Deliverypersonregister} />
                <Route path="/RegisterRestaurant" component={Restaurantreginfo} />
                <Route path="/Restaurant" component={Restauarntsprofile} />
                <Route exact  path="/Contactus" component={Contactus} />
                <Route  exact  path="/Cookies" component={Cookies} />

                <Route path="/RestaurantProfile/:id" component={Restauarntsprofile} />
                <Route path="/RestaurantAdminProfile" component={RestaurantsAdminprofile} />

                <Route path="/ListRestaurantsForCuisines/:category" component={ListRestaurantsForCuisines} />
                <Route path="/ListRestaurants/:zipcode" component={ListRestaurants} />
                <Route path="/checkout" component={Checkout}/>
                <Route path="/Usr_prof" component={Accountprofile}/>




                <Route path="/manageorder" component={ManageOrder} />
                <Route path="/manageaccount" component={ManageAccount} />
                <Route path="/deleteacc"  component={Deleteacc} />
                <Route path="/dashres" component={Restaurantdashboard} />
                
                
                <Route  component={Page404}/>

            </Switch>


                


            )
        }
    }

        return (
   <BrowserRouter>
     <div>
        <Header/>
       
                {routes}
                

         <Footer />
     </div>    
</BrowserRouter>
        )
    }
}
const mapStateToProps = state => {
    return {
    IsloginedIn:state.authReducer.token,
    account_type:state.authReducer.userInfo
    }
  }

export default connect(mapStateToProps)(Routes);