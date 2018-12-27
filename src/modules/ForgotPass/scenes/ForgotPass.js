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


 class ForgotPass extends Component {
   
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
        
        email:''
      },
      fields_sec: {
        
        code:'',
        password:''
      },
      errors: {},
      message:"",
      state_num:1
    }

    this.handleChange = this.handleChange.bind(this);
    this.SubmitHandler = this.SubmitHandler.bind(this);

    this.handleChange_sec = this.handleChange_sec.bind(this);
    this.SubmitHandler_sec = this.SubmitHandler_sec.bind(this);

  };


 SubmitHandler= (event) =>{
  event.preventDefault();

  if (this.validateForm()) {
    let fields = {};
   
    fields["email"] = "";
    
    this.setState({fields:fields});
    this.props.onAuth(this.state.fields.email);
   this.setState({message:'We just sent you a  mail , please check your Mail : The code expire after 5 minutes!'});
   this.setState({state_num:2});


}


 }

 handleChange_sec(e){
  let fields_sec = this.state.fields_sec;
  fields_sec[e.target.name] = e.target.value;
  this.setState({
    fields_sec
  });

};
   

validateForm_sec() {

  let fields_sec = this.state.fields_sec;
  let errors = {};


  if (!fields_sec["code"]) {
    errors["code"] = "*Please enter the code we send you.";
    return false;
  }
  if (!fields_sec["password"]) {
    errors["password"] = "*Please enter your new password.";
    return false;
  }



  


  this.setState({
    errors: errors
  });
  return true;


}  


 SubmitHandler_sec= (event) =>{
  event.preventDefault();

  if (this.validateForm_sec()) {
      if (parseInt(localStorage.getItem('code_reset')) === 0) {
          return this.setState({message:'The code has expired'});
      }else if(parseInt(localStorage.getItem('code_reset')) !== parseInt(this.state.fields_sec.code)){
          return this.setState({message:'The code is not correct!'});
      }else{
          let fields_sec = {};
   
          fields_sec["code"] = "";
          fields_sec["password"] = "";
          
          this.setState({fields_sec:fields_sec});
          this.props.ResetPassword(this.state.fields_sec.code,this.state.fields_sec.password,this.state.fields.email);
          return this.setState({message:'The password have been updated'});
      }
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
    //Regular expression for email validation
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (!pattern.test(fields["email"])) {
      formIsValid = false;
      errors["email"] = "*Please enter a valid email-ID.";
    }
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
           <label className="label">Enter your email below .</label>
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
         
            <br/>
            
            <div className="field" id="forgotPassMessage">
               <button  className=" button is-medium btn-fun-co is-fullwidth">
                  Send
               </button>
               <p className="help is-primary">{this.state.message}</p>
            </div>
            <div className="field">
                <div>
                <p className="help is-danger">{this.props.autherror}</p>

                </div>
            </div>
            
           
            </form> 

         

   
        if(this.props.loading){

        form =  <Loading/>
        

        }




      

       if(this.state.state_num > 1) {
        form = 
        <form onSubmit={this.SubmitHandler_sec}>
        
     
        <div className="field">
         <label className="label">Enter Your code below .</label>
          <div className="control ">
        <input className="input"
        name="code"
        value={this.state.fields_sec.code}
        onChange={this.handleChange_sec}
        type="text" placeholder="code" />
        
        
         </div>
  
      <p className="help is-danger">{this.state.errors.code}</p>
  
        </div>
       
          <br/>

          <div className="field">
         <label className="label">Enter your new password</label>
          <div className="control ">
        <input className="input"
        name="password"
        value={this.state.fields_sec.password}
        onChange={this.handleChange_sec}
        type="text" placeholder="********" />
        </div>
        <p className="help is-danger">{this.state.errors.password}</p>
  
        </div>
          <br/>
          
          <div className="field ">
             <button  className=" button is-medium btn-fun-co is-fullwidth">
                Send
             </button>
             <p className="help is-primary">{this.state.message}</p>
          </div>
          <div className="field">
             
          </div>
          
         
          </form> 

       
         
       }
      
             
        return(
          
  <section className="login-form">
   
  <div className="container">
      
       <div className="columns">
       <div className="column is-0">

           
       </div>
       
       
       <div className="column is-0 login-fields">
       
      
      <Link to="/">
      <img src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"/>
        </Link>
       
       <br/>
       <br/>
      
       <h2>
           Forgot password ?
       </h2>
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
    loading:state.ResetReducer.loading,
    message:state.ResetReducer.message
  
    }
  };
  
   const mapDispatchToProps = dispatch => ({
    onAuth: (email) => dispatch(actions.Reset(email)),
    ResetPassword: (code,password,email) => dispatch(actions.ResetPassword(code,password,email)),
   });


 export  default connect(mapStateToProps,mapDispatchToProps)(ForgotPass);