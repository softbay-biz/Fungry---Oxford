import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import {Link} from  'react-router-dom';
import  Loading from '../../../components/Loader/Loading';
import  {Redirect} from  'react-router-dom';

/**
 * @class Register  component
 * @description Register to  export  header  for the  restauarnts
 */


 class Loginclient  extends Component {
   
  componentDidMount(){
    var fadeTarget = document.getElementById("fadeffect");
        fadeTarget.style.display ="none";
        window.scrollTo(0, 0);
  }
  componentWillUnmount() {
  
    var fadeTarget = document.getElementById("fadeffect");

    fadeTarget.style.display = "inherit";


  }
   
         
  constructor() {
    super();
    this.state = {
      fields: {
        password:'',
        email:''
      },
      errors: {},
    
    }

    this.handleChange = this.handleChange.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);

  };


 SubmitHandler= (event) =>{
  event.preventDefault();

  if (this.validateForm()) {
    let fields = {};
   
    fields["email"] = "";
    fields["password"] = "";
    this.setState({fields:fields});
    this.props.onAuth(this.state.fields.email,this.state.fields.password);
   this.setState({message:'Registration completed , please check your Mail'});


}


 }

 handleChange(e){
  let fields = this.state.fields;
  fields[e.target.name] = e.target.value;
  this.setState({
    fields
  });

};
   

validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;


  if (!fields["email"]) {
    formIsValid = false;
    errors["email"] = "*Please enter your email-ID.";
  }

  if (typeof fields["email"] !== "undefined") {
    //regular expression for email validation
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(fields["email"])) {
      formIsValid = false;
      errors["email"] = "*Please enter valid email-ID.";
    }
  }

  
  if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
  }



  this.setState({
    errors: errors
  });
  return formIsValid;


}  



















    render(){

        let  form = 
          <form onSubmit={this.SubmitHandler}>
          
       
          <div className="field">
           <label className="label">Email address</label>
            <div className="control has-icons-left has-icons-right">
          <input className="input"
          name="email"
          value={this.state.fields.email}
          onChange={this.handleChange}
          type="email" placeholder="E.g name@example.com" />
          <span className="icon is-small is-left">
           <i className="fas fa-envelope"></i>
            </span>
          
           </div>
    
        <p className="help is-danger">{this.state.errors.email}</p>
    
          </div>
         <div className="field">
          <label className="label">Password</label>
    
          <div className="control has-icons-left">
          <input className="input" 
          name="password"
          value={this.state.fields.password}
          onChange={this.handleChange}
          type="password" placeholder="**********" />
          <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
         </span>
          </div>
          <p className="help is-danger">{this.state.errors.password}</p>
    
            </div>
            <br/>
            
            <div className="field ">
               <button  className=" button is-medium btn-fun-co is-fullwidth">
                   Login
               </button>
            </div>
            <div className="field">
                <div>
                <p className="help is-danger">{this.props.autherror}</p>

                    <b>
                       <Link to="/ForgotPass">Forgot your password? </Link> 
                        <span className="my-or">or</span>
                        <Link to="/Register" >Sign up</Link>
                       <b>
                       </b>
                    </b>
                </div>
            </div>
            
           
            </form> 

         

   
        if(this.props.loading){

        form =  <Loading/>
        

        }

       let authRedirect= null;

       if(this.props.isLoggedIn) {
         
         if(this.props.account_type.account_type ==="restaurant"){
          authRedirect =<Redirect to="/dashres"/>
         }else if(localStorage.getItem("cart") !== null){
          authRedirect =<Redirect to="/checkout"/>
         }else{
          authRedirect =<Redirect to="/"/>;
         }
                  
       }
      
             
        return(
          
  <section className="login-form">
   
  <div className="container">
     {authRedirect}
      
       <div className="columns">
       <div className="column is-0">

           
       </div>
       
       
       <div className="column is-0 login-fields">
       
      
      <Link to="/">
      <img src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"/>
        </Link>
       
       <br/>
       <br/>
      
       <h1>
           Login
       </h1>
       <br/>


       {form}
      
      
       </div>
       
      
       
       <div className="column is-0">
           
       </div>
       </div>

   
  </div>  
</section>

       
        )
      
    }

 };


  const mapStateToProps = state => {
    return {
    loading:state.authReducer.loading,
    account_type: state.authReducer.userInfo,
    autherror:state.authReducer.error,
    isLoggedIn:state.authReducer.token !==null
    }
  };
 
   const mapDispatchToProps = dispatch => ({
    onAuth: (email,password) => dispatch(actions.auth(email,password))
   });


 export  default connect(mapStateToProps,mapDispatchToProps)(Loginclient);