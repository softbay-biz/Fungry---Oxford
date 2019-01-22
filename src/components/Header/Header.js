import React, {Component } from 'react';
import {Link,Redirect}  from  'react-router-dom';
import { connect } from 'react-redux';
import {dropdown,dropdowns,headermenu} from './externaljs';
import * as actionlogin from '../../modules/Loginclient/actions';
import * as actionutile from '../../modules/Utile/actions';
import Notification from 'react-bulma-notification';
import '../../modules/Home/utils/index.css';




class  Header  extends  Component {
  
  constructor(props){
    super(props);
    this.state = {
      fields: {
        inputzipcode:'',
        inputTime:''
      },
       inputzip:'',
       redirect:false,
       deliveryTime:'',
       deliveryDate:''

    };
    this.sentData = this.sentData.bind(this); 
    this.sentDataOnchange = this.sentDataOnChange.bind(this); 
    this.setRedirect= this.setRedirect.bind(this); 
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
 }

  componentDidMount(){
    window.scrollTo(0, 0)
   let dt = new  Date();
   let  currentWeekDay = dt.getDay();
   let lessDay = currentWeekDay == 0?6:currentWeekDay-1;
   let wkStart = new Date(new Date(dt).setDate(dt.getDate()-lessDay));
   let wkEnd = new Date(new Date(wkStart).setDate(wkStart.getDate()+6));
   let currentLocation = window.location.pathname;
  //We close popup when url changed
   setInterval(()=>{
     if(currentLocation != window.location.pathname){
      this.closeNoti();
      currentLocation = window.location.pathname;
     }
   },300);

    }

  callNoti =() =>{
    Notification.notice(
      `This postcode doesn't exist in Oxford. Please try again and be sure to enter a 
      valid format : e.g. OX1 2JD (don't forget the space)`,
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
           let fields = {};

                          
                 fields["inputzipcode"] ="";

                 this.setState({fields:fields});
          
           
          if(/(^OX[1-9]\s\w{3}){1}/gm.test(this.state.fields.inputzipcode)){
            this.setState({inputzip:this.state.fields.inputzipcode});
            this.props.postcode(this.state.fields.inputzipcode);

            this.closeNoti();
            this.setState({redirect:true});

          
         }else{
           
           this.callNoti();

         }
      }
     
 } 

 sentDataOnChange(e){
  let fields = this.state.fields;
  fields[e.target.name] = e.target.value;
  this.setState({
    fields
  }); 

   
 }
 setRedirect(){
         let fields = {};

                  
         fields["inputzipcode"] ="";

         this.setState({fields:fields});
  
   
  if(/(^OX[1-9]\s\w{3}){1}/gm.test(this.state.fields.inputzipcode)){
    this.setState({inputzip:this.state.fields.inputzipcode});
    this.props.postcode(this.state.fields.inputzipcode);

    this.closeNoti();
    this.setState({redirect:true});

  
 }else{
   
   this.callNoti();

 }

 }
 onChangeTime(e){
  let {name, value} = e.target;
  console.log(value)
  this.setState({deliveryTime:value});
  this.props.SetTime(value);
  console.log(this.props.time);

 }

 onChangeDate(e){
  let {name, value} = e.target;
  console.log(value);
  this.setState({deliveryDate:value});
  this.props.SetDate(value);
  console.log(this.props.date);
 }
    
 render(){
   var  redirectData =()=>{
    if(this.state.redirect){ 
    return(
      <Redirect to={"/ListRestaurants/"+this.state.inputzip }/>

    )}
    else {
      return ;
    }
}
   
  var Count =() => {

    if(this.props.amount == null ){
      return 0;
    }
  
    else{
    return this.props.amount.items.length;
      
    }
         
  }; 
     
     let leftmenu =(
      <div  className="navbar-start">
     <div className="navbar-item sticky-search " >
     <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link button btn-fun-co btn-center" >
        {(this.props.date ? this.props.date : "ASAP") +"  "+ (this.props.time ? this.props.time : "")}
        </a>
        <div className="navbar-dropdown is-boxed  ubea-eat">
        <a className="navbar-item moving-left">
            <span className="icon is-small is-left icon-uba">
              <i className="far fa-clock"></i>
            </span>
              <b className="icon-goes-right to-left">
                ASAP
              </b>
         </a>
         <div className="hr-padding">
         <hr className="dropdown-divider " />
         </div>

         <a onClick={headermenu}  className="navbar-item moving-left">
            <span className="icon is-small is-left icon-uba">
              <i className="far fa-calendar-alt"></i>
            </span>
              <b className="icon-goes-right to-left">
                Schedule Order
              </b>
         </a>
         <br/>
         <div  className="hid-element-nav" id="nav-ubrea-hide">
         
         <div className="navbar-item  ubea-eat ">
         <div className="field">


         <label className="label label-weight"> Date</label>
      
               
         <div className="select ">
             <select 
              onChange={this.onChangeDate}
             className="select-font custom-width">
              <option value="Mon, Sep 3">Mon, Sep 3</option>
              <option value="Tue, Sep 4">Tue, Sep 4</option>
              <option value="Wen, Sep 5">Wen, Sep 5</option>
              <option value="Thur, Sep 6">Thur, Sep 6</option>
              <option value="Fri, Sep 7">Fri, Sep 7</option>
              <option value="Sat, Sep 8">Sat, Sep 8</option>
        
             
             </select>
            </div>

       
          </div>
        </div>


         <div className="navbar-item">
         <div className="field">
            <label className="label  label-weight">Time</label>
            
            <div className="select ">
             <select
             onChange={this.onChangeTime}
             className="select-font">
              <option value="1PM - 2PM">1PM - 2PM</option>
              <option value="2PM - 3PM">2PM - 3PM</option>
              <option value="3PM - 4PM">3PM - 4PM</option>
              <option value="5PM - 6PM">5PM - 6PM</option>
              <option value="7PM - 8PM">7PM - 8PM</option>
              <option value="9PM - 10PM">9PM - 10PM</option>
              <option value="6AM - 7AM">6AM - 7AM</option>
              <option value="7AM - 8AM">7AM - 8AM</option>
              <option value="8AM - 9AM">8AM - 9AM</option>
              <option value="9AM - 10AM">9AM - 10AM</option>
              <option value="10AM - 11AM">10AM - 11AM</option>
              <option value="11AM - 12AM">11AM - 12AM</option>
             
             </select>
            </div>
            <br/>
             
             
         
         </div>
         </div>
         <div className="navbar-item">
         
          <button className="button btn-fun-co hover-btn">
            Set Time
          </button>
         
         </div>
         </div>
         
         </div>
      </div>
  </div>
   <div className="navbar-item">
          <p className="to-position">
           <b>
            TO
           </b>
         </p>

   </div>
 
<div className="navbar-item sticky-button" >

<div className="field is-grouped intro-text" >
      <div className="control has-icons-left ">
       <input onKeyDown={(e)=>{this.sentData(e)}} className="input sticky-input" type="text" placeholder={this.props.postcodes}  />
        <span className="icon is-small is-left sticky-nav-panel-icon">
          <i className="fas fa-map-marker-alt" ></i>
        </span>
      </div>
 </div>
 </div>
</div>

     );
    
if(this.props.currentPage === "Home"){
  leftmenu =(
    <div className="navbar-start">
            <div className="navbar-item sticky-button" >
  
  <div className="field is-grouped intro-text" >
 <div className="control has-icons-left header-mv-input ">
   <input id="searchByPostcode" onKeyDown={(e)=>{this.sentData(e)}} onChange={(e)=>{this.sentDataOnchange(e)}}
    value={this.state.inputzipcode} name="headerinput"
     className="input sticky-input" type="text"
     name="inputzipcode"
     placeholder="Enter your postcode" />
     <span className="icon is-small is-left">
     <i className="fas fa-map-marker-alt" ></i>
   </span>
 </div>
 
</div>
 
</div>
 <div className="navbar-item sticky-search" >
 <p className="control ">
   <a  onClick={this.setRedirect}  className="button  btn-fun-co btn-mv-left">
     SEE RESTAURANTS
   </a>
 </p>
      </div>
 

    </div>
  )


}

let restmenu ="";

if(this.props.account_type !== null){
if(this.props.account_type.account_type == "restaurant"){
 restmenu = (
 <div>
   <hr className="dropdown-divider" />
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
  if(this.props.account_type.account_type === "restaurant"){
    noncustomer  = (
   <div>
     <hr className="dropdown-divider" />
           <Link to="/dashres" className="dropdown-item">
            Restaurant DashBoard
           </Link> 
    </div>
   )
  }
  if( this.props.account_type.account_type === "account_manager"){
    noncustomer  = (
   <div>
     <hr className="dropdown-divider" />
           <Link to="/dashres" className="dropdown-item">
            Manage Restaurant
           </Link> 
    </div>
   )
  }
  }else{
    noncustomer ="";
   }





let  leftbutton ="";

  if (this.props.IsloginedIn === null) {
    leftbutton = <Link  to="/Login" className="button  btn-fun-li">LOGIN</Link>  


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
      <a className="button btn-fun-li" aria-haspopup="true" aria-controls="dropdown-menu">
      MY ACCOUNT
        
      </a>
    </div>
    
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {user_profile}
        
        {restmenu}
        
        {noncustomer}

        <hr className="dropdown-divider" />
        <Link to="/Login" onClick={()=>{

          this.props.logout()
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

    rightbutton = <Link  to="/Register" className="button  btn-fun-co">REGISTER</Link>  

  }

  if(this.props.account_type !== null){
  if (this.props.IsloginedIn && this.props.account_type.account_type=== "restaurant") {

    rightbutton = <button className="button  btn-fun-co">Emergency stop</button>  

  }
  }
  if(this.props.account_type !== null){
    if (this.props.IsloginedIn && this.props.account_type.account_type=== "account_manager") {
  
      rightbutton = "";
  
    }
    }


    if(this.props.account_type !== null){
      if (this.props.IsloginedIn && this.props.account_type.account_type=== "customer") {
   rightbutton = <Link to="/checkout" className="button  btn-fun-co ">ORDER</Link>

      }

  }




let rightmenu =(

  <div className="navbar-end sticky-nav-position" >
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
               <img className="img-intro sticky-nav-panier" src={require('../../assets/img/panier-black.png')} alt="" />
             </Link>
             <div className="sticky-nav-panier-counter">
               {Count()}
            </div>
          </div>

  </div>
);






    return(

      <div className="stick" id="fadeffect">
      {redirectData()}
      <nav className="navbar sticky-nav-head is-fixed-top">
    
        <div className="container">
               <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                <img className="sticky-logo-head logo-align" src={require('../../assets/img/fungry-logo.png')} alt="" />
              </Link>
        </div>
         
    <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
  </a>       
         
          
    <div className="navbar-menu" id="navMenu">
     {leftmenu}
     {rightmenu}
    </div>
  </div>
</nav>
</div>
       
     
   );

  }

}

const mapStateToProps = state => {
  return {
  currentPage:state.pageReducer.page,
  IsloginedIn:state.authReducer.token,
  amount:state.loadMenuReducer.cart,
  account_type:state.authReducer.userInfo,
  postcodes:state.authReducer.postcode,
  time:state.setReducer.time,
  date:state.setReducer.date
  }
};
const mapDispatchToProps = dispatch => ({
  logout:()=>dispatch(actionlogin.authLogout()),
  postcode:(postcode)=>dispatch(actionlogin.Setpostcode(postcode)),
  SetDate:(date)=>dispatch(actionutile.SetDate(date)),
  SetTime:(time)=>dispatch(actionutile.SetTime(time))

});


export default connect(mapStateToProps,mapDispatchToProps)(Header);