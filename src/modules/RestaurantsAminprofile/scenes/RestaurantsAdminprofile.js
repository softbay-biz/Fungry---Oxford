import React, { Component } from 'react';
import Restauarntsmenu from '../common/Restaurantsmenu';
import Restauarntsfood from '../common/Restaurantsfood';
import * as actionsload from  '../../Restaurantsprofile/actions';
import * as actions from  '../actions';
import { connect } from 'react-redux';
import  Loading from '../../../components/Loader/Loading';
var Menudata =  require('../common/MenuJson.json');


/**
 * @class Restaurantsprofile component
 * @description Restauarant profile header to  export  header  for the  restauarnts
 */


 class RestauarntsAdminprofile  extends Component {

       state = {
           data:null
       }
    


    componentDidMount(){
        this.props.GetDishcategory();
        if(this.props.UserInfo !==null){
          this.props.onloadMenu(this.props.UserInfo.id_members);
          let id = parseInt(this.props.UserInfo.id_members);
          this.props.GetDish(id );

        }
        window.scrollTo(0, 0);
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
        postcode={data.postcode}
        image={data.image}
         
        
             
        />

       }
       var Cartdata = this.props.cart ;
       
       
      
        


        return(
           <div>
              
              {Restauarntsmenus }
          
          <section>
          <div className="section-restaurant-food-types">
             <div className="container">
      
            <div className="columns">    

     
            
           <Restauarntsfood
            
            { ...this.props}
            />



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
    UserInfo:state.authReducer.userInfo,
    category:state.adminProfileReducer.category,
    menu:state.adminProfileReducer.menu,
    message:state.adminProfileReducer.message

    }
  };
 
   const mapDispatchToProps = dispatch => ({
     onloadMenu: (id) => dispatch(actionsload.Load_Menu_Restaurant(id)),
     Updateprofile: (data) => dispatch(actions.Updateprofile(data)),
     UpdateMeu: (data) => dispatch(actions.Updatemeal(data)),
     AddMenu: (data) => dispatch(actions.Addmeal(data)),
     GetDishcategory: (data) => dispatch(actions.GetDishcat(data)),
     GetDish: (id) => dispatch(actions.GetDish(id)),
     DeleteDish: (idresto,iddish) => dispatch(actions.DeleteDish(idresto,iddish))
     
   });


export  default connect(mapStateToProps,mapDispatchToProps)(RestauarntsAdminprofile);