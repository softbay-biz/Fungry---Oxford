import React, { Component } from 'react';
import {Link,Redirect} from  'react-router-dom';
import { connect } from 'react-redux';
import {dropdown} from '../utils/main';
import * as actionlogin from '../../Loginclient/actions';


import Notification from 'react-bulma-notification';
import '../utils/index.css';


/**
 * @class header component
 * @description this is the header commmon for the header commonet
 */


 class Homeheader  extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        zipcode:''
      },
      redirect:false,
      data:''
    
    }


    this.handleChange = this.handleChange.bind(this);

    this.submitContactusForm = this.submitContactusForm.bind(this);
}


handleChange =(e) =>{
    
  let fields = this.state.fields;
  fields[e.target.name] = e.target.value;
  this.setState({
    fields
  });
 }

 callNoti =() =>{
  Notification.notice(
    `This postcode doesn't exist in Oxford. Please try again and be sure to enter a valid format : e.g. OX1 2JD (don't forget the space)`,
    {
      placement:"topLeft",
      duration: 60
    }
  );

 }
   closeNoti = () =>{
      let tab = document.getElementsByClassName('notification');
      let i = 0;
      while(i<tab.length){
        tab[i].remove();
        i++;
      }
   }
  sentData(e){
    if (e.keyCode === 13) {
          e.preventDefault();
         let fields = {};
        
                  
         fields["zipcode"] ="";

         this.setState({fields:fields});
         
         if(/(^OX[1-9]\s\w{3}){1}/gm.test(this.state.fields.zipcode)){
            this.closeNoti();
            this.zipCodeForm();
          
         }else{
           
           this.callNoti();

         } 
      }
     
 }
 submitContactusForm =(e) => {
  
        e.preventDefault();
         let fields = {};
        
                  
         fields["zipcode"] ="";

         this.setState({fields:fields});
         
         if(/(^OX[1-9]\s\w{3}){1}/gm.test(this.state.fields.zipcode)){
            this.closeNoti();
            this.zipCodeForm();
          
         }else{
           
           this.callNoti();

         } 

      
 }

 zipCodeForm = (e) => {

  var  Postdata  = {
    requestName:btoa(btoa(btoa("post"))),
    data:{
      ...this.state.fields
    }
    
 } 


 this.setState({redirect:true});
 this.setState({data:this.state.fields.zipcode});
 this.props.postcode(this.state.fields.zipcode);

 } 


    

     render(){

       
  var Count =() => {

    if(this.props.amount == null ){
      return 0;
    }
  
    else{
    return this.props.amount.items.length;
      
    }
         
  }; 


      let restmenu ="";

if(this.props.account_type !== null){
if(this.props.account_type.account_type === "restaurant"){
 restmenu = (
 <div>
    <hr className="dropdown-divider"/>
         <Link to="/RestaurantAdminProfile" className="dropdown-item">
          Restaurant Profile
         </Link> 
  </div>
 )
}
}else{
   restmenu="";
 }


 let noncustomer  ="";
 if(this.props.account_type !== null){
   if(this.props.account_type.account_type === "restaurant" || this.props.account_type.account_type === "account_manager"){
     noncustomer  = (
    <div>
      <hr className="dropdown-divider" />
            <Link to="/dashres" className="dropdown-item">
             Restaurant DashBoard
            </Link> 
     </div>
    )
   }
   }else{
     noncustomer ="";
    }
 





      let  leftbutton ="";

  if (this.props.IsloginedIn === null) {

 leftbutton = <Link  to="/Login" className="button  btn-fun-li-lg home-font ">LOGIN</Link>  


  }
  else {

    var user_profile ="";
    if(this.props.account_type !== null){
      if (this.props.IsloginedIn && this.props.account_type.account_type !== "account_manager") {
    
       user_profile = <Link  to="/Usr_prof"  className="dropdown-item ">
        User Profile
       </Link>
    
      }
      }



    leftbutton = (
      <div onClick={dropdown} >
      <div className="dropdown" id="dropdown"  >
      <div className="dropdown-trigger">
        <a className="button btn-fun-li-lg" aria-haspopup="true" aria-controls="dropdown-menu">
        MY ACCOUNT
          
        </a>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
         {user_profile}

          {restmenu}

          {noncustomer}

          <hr className="dropdown-divider" />
          <Link  to="/Login" onClick={()=>{

this.props.logout();


}} className="dropdown-item ">
            Logout
          </Link>
        
        </div>
      </div>
    </div>
    </div>
    )

  }

  let  rightbutton ="";

  if (this.props.IsloginedIn === null) {

    rightbutton = <Link  to="/Register" className="button  btn-fun-co-lg home-font ">REGISTER</Link>  

  }

  if(this.props.account_type !== null){
  if (this.props.IsloginedIn && this.props.account_type.account_type=== "restaurant") {

    rightbutton = <Link  to="/Register" className="button  btn-fun-co-lg">Emergency stop</Link>  

  }
  }
  
  if(this.props.account_type !== null){
    if (this.props.IsloginedIn && this.props.account_type.account_type=== "customer") {
 rightbutton = <Link to="/checkout" className="button  btn-fun-co-lg ">ORDER</Link>

    }

}



      if(this.state.redirect){
        return(
          <Redirect to={"/ListRestaurants/"+this.state.data }/>

        )
      }

        return(

  


	<div>
	
	
  
  
  <div className="container">
      
      
  
   <nav className="navbar  navbar-intro" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a href="">
        <img  src={require("../../../assets/img/fungry-logo.png")} className="intro-logo" alt="" />
    </a>
  </div>
  <div className="navbar-menu">
  <div className="navbar-start">
  
  </div>

  <div className="navbar-end">
        <div className="navbar-item">
            <div className="control">
           {leftbutton}
         </div>

       </div>
        <div className="navbar-item">
        <div className="control">
           {rightbutton}
            </div>

       </div>
       <div className="navbar-item">
             <Link to="/checkout">
               <img className="img-intro sticky-nav-panier panier-white" src={require('../../../assets/img/panier.png')} alt=""
               width="40px" 
               />
             </Link>
             <div className="sticky-nav-panier-counter">
               {Count()}
            </div>
          </div>
    
  </div>
</div>
  </nav>
  
  <div className=" text-intro ">
  
<p> We are proud to deliver food 
   for Oxford's best <br/>
   independent restaurants</p>
   
   <div className="field is-grouped intro-text" >
   <div className="columns is-multiline">
      <div className="column is-full-mobile is-half-tablet">
           <div className="control has-icons-left intro-input">
     <input onKeyDown={(e)=>{this.sentData(e)}} className="input sticky-input input-home input-home-down"
        name="zipcode"
        value={this.state.fields.subject}
        onChange={this.handleChange}
       
       type="text" placeholder=" Enter your postcode" />
         <span className="icon is-small is-left icon-styles-nav icon-nav-move" >
      <i className="fas fa-map-marker-alt" ></i>
    </span>
  </div>
  
      </div>
<div className="column is-full-mobile is-half-tablet">
     
  <p className="control text-btn">
  <a  className="button  btn-fun-co" onClick={this.submitContactusForm}>
      SEE RESTAURANTS
    </a>
  </p>
    
</div>

       
   </div>
 
</div>
</div>
  </div>

  </div> 
  


        )
     }

 }

 const mapStateToProps = state => {
  return {
    currentPage:state.pageReducer.page,
    IsloginedIn:state.authReducer.token,
    amount:state.loadMenuReducer.cart,
    account_type:state.authReducer.userInfo
  }
};

const mapDispatchToProps = dispatch => ({
  logout:()=>dispatch(actionlogin.authLogout()),
  postcode:(postcode)=>dispatch(actionlogin.Setpostcode(postcode))
});
export default connect(mapStateToProps,mapDispatchToProps)(Homeheader);

