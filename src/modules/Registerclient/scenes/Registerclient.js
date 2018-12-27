import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Loading from '../../../components/Loader/Loading';
import * as actions from  '../actions';
import {Link}  from  'react-router-dom';
import Popup from "reactjs-popup";



/**
 * @class Register  component
 * @description Register to  export  header  for the  restauarnts
 */


 class Registerclient  extends Component {

  componentDidMount() {
     
    var openPopUp = false;
    var fadeTarget = document.getElementById("fadeffect");
    fadeTarget.style.display ="none";

  }
  componentWillUnmount() {
    var fadeTarget = document.getElementById("fadeffect");
    fadeTarget.style.display = "inherit";

  }



  constructor() {
    super();
    this.state = {
      fields: {
        first_name:'',
        last_name:'',
        phone_number:'',
        password:'',
        email:''
      },
      errors: {},
      message:''
    
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

      //Register  client information
    
       RegisterclientData =()=> {

         
         var  Registerclientdata  = {
            requestName:btoa(btoa(btoa("registration"))),
            data:{
              account_type:"customer",
              ...this.state.fields
            }
            
         } 
          
        
         this.props.clientRegister(Registerclientdata);
     

    }




     
     handleChange(e){
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    };
       


    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["first_name"] = "";
          fields["last_name"] = "";
          fields["email"] = "";
          fields["password"] = "";
          fields["phone_number"] ="";
          this.setState({fields:fields});
          this.RegisterclientData();
          console.log( "registration client   form submitted" );
          this.setState({message:'Registration completed , please check your Mail'});

      }

    }


  
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["first_name"]) {
        formIsValid = false;
        errors["first_name"] = "*Please enter your firstname.";
      }

      /*if (typeof fields["first_name"] !== "undefined") {
        if (!fields["first_name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["first_name"] = "*Please enter alphabet characters only.";
        }
      }*/
     
      if (!fields["last_name"]) {
        formIsValid = false;
        errors["last_name"] = "*Please enter your lastname.";
      }

      /*if (typeof fields["last_name"] !== "undefined") {
        if (!fields["last_name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["last_name"] = "*Please enter alphabet characters only.";
        }
      }*/






      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "*Please enter a valid email-ID.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "*Please enter a valid email-ID.";
        }
      }

      if (!fields["phone_number"]) {
        formIsValid = false;
        errors["phone_number"] = "*Please enter a valid phone number.";
      }

      if (typeof fields["phone_number"] !== "undefined") {
      if (!fields["phone_number"].match(/^447[0-9]{9}$/)) {
          formIsValid = false;
          errors["phone_number"] = "*Please enter a valid phone number.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Your password must contain at least one capital letter, one special caracter and one number.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }  

















     



    render(){
             
    
       let registerForm =(


       
              
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

                
        <div className="field ">
        <label className="label">First name</label>
         <p className="control ">
       <input className="input"
       name="first_name"
       value={this.state.fields.first_name}
       onChange={this.handleChange}
       type="text" placeholder="E.g Lydia" />
       
       
        </p>
        <p className="help is-danger">{this.state.errors.first_name}</p>
   </div>
         
           <div className="field">
   
        <label className="label">Last name</label>
         <p className="control">
       <input className="input"
       name="last_name"
         value={this.state.fields.last_name}
         onChange={this.handleChange}   
          type="text" placeholder="E.g Cousins" />
      
       
        </p>
        <p className="help is-danger">{this.state.errors.last_name}</p>
      
            </div>
            
       
       
       
       <div className="field">
        <label className="label">Email address</label>
         <p className="control has-icons-left has-icons-right">
       <input className="input"
       name="email"
       value={this.state.fields.email}
       onChange={this.handleChange}

       type="email" placeholder="E.g name@example.com" />
       <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
         </span>
       
        </p>
        <p className="help is-danger">{this.state.errors.email}</p>
       </div>
      <div className="field">
       <label className="label">Password</label>

       <p className="control has-icons-left">
       <input className="input" 
        name="password"
         value={this.state.fields.password}
         onChange={this.handleChange}                
       type="password" placeholder="E.g Mark@.37yde" />
       <span className="icon is-small is-left">
     <i className="fas fa-lock"></i>
      </span>
       </p>

         <p className="help is-danger">{this.state.errors.password}</p>
         </div>
         
          
           <div className="field">
       <label className="label">Mobile phone</label>

       <p className="control has-icons-left">
       <input className="input" 
         value={this.state.fields.phone_number}
         onChange={this.handleChange}          
               name="phone_number"
       type="tel" placeholder="E.g 447XXXXXXXXX" />
       <span className="icon is-small is-left">
     <i className="fas fa-mobile"></i>
      </span>
       </p>

         <p className="help is-danger">{this.state.errors.phone_number}</p>
         </div>
         
         <br/>
         
          <div className="field ">
            <button onClick={this.Registerclient} className=" button is-medium btn-fun-co is-fullwidth">
                Submit
            </button>
            <p className="help is-success">{this.props.message === 400?this.openPopUp = true:this.props.message}</p>
            <p className="help is-danger">{this.props.error}</p>

         </div>
         </form>



       );
 


      
       if(this.props.loading){
         
        registerForm = (
         <Loading/>
        );

       }
       



        return(
            <section className="login-form">
   
            <div className="container">
              
                
                 <div className="columns">
                 <div className="column is-0">
        
                     
                 </div>
                 
                 
                 <div className="column  login-fields">
                 
                
                <Link to="">
                <img src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
                  </Link>
            
                
                 <h1>
                     Create a costumer account
                 </h1>
                 <br />
                
                
          
        
                 {registerForm}

                 </div>
                 
                
                 
                 <div className="column is-0">
                     
                 </div>
                 </div>
        
             
            </div> 
             {<Popup open={this.openPopUp} position="right center">
                <div>
                <br/>
                   <br/>
                   <h3>
                   <center className="color">This email already exists. If you forgot your password <strong><Link to="/ForgotPass" onClick={function(){this.openPopUp = false}}>click here</Link></strong>.</center> 
                  </h3>
                  
                  <br/>
                   <br/></div>
                   
            </Popup>} 
          </section>
          
          
          
       
        )
      
    }

 }





 const mapStateToProps = state => {
  return {
  loading:state.registerReducer.loading,
  error:state.registerReducer.error,
  message:state.registerReducer.message
  }
};

 const mapDispatchToProps = dispatch => ({
  clientRegister: (registerData) => dispatch(actions.register(registerData))
 }); 

 export  default connect(mapStateToProps,mapDispatchToProps)(Registerclient);