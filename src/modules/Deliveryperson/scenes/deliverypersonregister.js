import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import  Loading from '../../../components/Loader/Loading';
import * as actions from  '../actions';


/**
 * @class  Deliveryperson  motivation
 * @description Delivery  person motivation for all  the devilery person view
 */


 class Deliverypersonregister  extends Component {
  
  componentDidMount() {
     

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
          delnum:1,
          fields: {
            first_name:'',
            last_name:'',
            phone_number:'',
            password:'',
            email:''
          },
          fieldsdelivery:{
            motivation:'',
            availabilies:''
           },
          errors: {},
          message:'',
          statesr:{}
        
        }

    
        this.handleChange = this.handleChange.bind(this);

        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    
    }













    
    handleChange =(e) =>{
    
        if(this.state.delnum === 1){
         let fields = this.state.fields;
         fields[e.target.name] = e.target.value;
         this.setState({
           fields
         });
        }
        
        
        let fieldsdelivery = this.state.fieldsdelivery;
        fieldsdelivery[e.target.name] = e.target.value;
        this.setState({
            fieldsdelivery
        });




    
        };
    
    
    
    
    
          
    
    
       submituserRegistrationForm =(e) => {
         e.preventDefault();
    
    
         if(this.state.delnum === 2){
             //
             //In this method i just  set  the state  of the  fields 
             //i dont sent any  data is  only when i submit the seconde
             //field  that  i can  set the overall state
             //
            if (this.validateForm2()) {
                let fieldsdelivery = {};
               
                fieldsdelivery["motivation"] ="";
                fieldsdelivery["availabilies"] = "";
                
       
                this.setState({fieldsdelivery:fieldsdelivery});
    
                

                this.RegisterrestaurantData();
                console.log( "registration restaurant   form submitted" );
                this.setState({message:'Registration completed , please check your Mail'});
       
    
       
            }
      
    
    
         }
     


         if(this.state.delnum === 1){
    
            //
            // In this method i set the overall state then  i sent  the 
            // registration method
            //
    
         if (this.validateForm()) {
             let fields = {};
             
                fields["first_name"] = "";
                fields["last_name"] = "";
                fields["email"] = "";
                fields["password"] = "";
                fields['phone_number'] ="";
                this.setState({delnum:this.state.delnum+1});
    
             this.setState({fields:fields});
             this.statesr = this.state.fields;
             console.log(this.state.fields);
            
           
         }
        }
    
    
    
       }
    
    
    
    
    
        //Register  client information
        
        RegisterrestaurantData =()=> {
    
             
            var  Registerdeliverydata  = {
               requestName:btoa(btoa(btoa("registration"))),
               data:{
                 account_type:"delivery_person",
                 ...this.state.fieldsdelivery,
                 ...this.statesr
               }
               
            } 
            this.setState({delnum:this.state.delnum+1});

            this.props.deliveryRegister(Registerdeliverydata);
    
       
    
       }
    
    
    
    
    
     
       validateForm() {
    
         let fields = this.state.fields;
         let errors = {};
         let formIsValid = true;
    
         if (!fields["first_name"]) {
           formIsValid = false;
           errors["first_name"] = "*Please enter your username.";
         }
    
         /*if (typeof fields["first_name"] !== "undefined") {
           if (!fields["first_name"].match(/^[a-zA-Z ]*$/)) {
             formIsValid = false;
             errors["first_name"] = "*Please enter alphabet characters only.";
           }
         }*/
        
         if (!fields["last_name"]) {
           formIsValid = false;
           errors["last_name"] = "*Please enter your username.";
         }
    
         /*if (typeof fields["last_name"] !== "undefined") {
           if (!fields["last_name"].match(/^[a-zA-Z ]*$/)) {
             formIsValid = false;
             errors["last_name"] = "*Please enter alphabet characters only.";
           }
         }*/
    

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
    
         if (!fields["phone_number"]) {
           formIsValid = false;
           errors["phone_number"] = "*Please enter your mobile no.";
         }
    
         if (typeof fields["phone_number"] !== "undefined") {
         if (!fields["phone_number"].match(/^447[0-9]{9}$/)) {
             formIsValid = false;
             errors["phone_number"] = "*Please enter valid phone number.";
           }
         }
    
         if (!fields["password"]) {
           formIsValid = false;
           errors["password"] = "*Please enter your password.";
         }
    
         if (typeof fields["password"] !== "undefined") {
           if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)) {
             formIsValid = false;
             errors["password"] = "*Please password must contain a captial letter, special symbole and number.";
           }
         }
         
        
         this.setState({
           errors: errors
         });
         return formIsValid;
    
    
       }  
    
    
    
    
    
    
    
     validateForm2(){
    
        let fieldsdelivery = this.state.fieldsdelivery;
         let errors = {};
         let formIsValid = true;
    
        if (!fieldsdelivery["motivation"]) {
            formIsValid = false;
            errors["motivation"] = "*Please enter your motivation.";
          }
           
          if (!fieldsdelivery["availabilies"]) {
            formIsValid = false;
            errors["availabilies"] = "*Please enter your availability.";
          }
         
        
   
    
          this.setState({
            errors: errors
          });
          return formIsValid;
    
     }
    
 

    render(){

      if(this.props.loading){

        return (
       

         <div>

         <section className="section-register-restaurant">
           <div className="container">
     
        
        <div className="columns">
         <div className="column "></div>
         <div className="column">

         <Link to="/" >
              <img className="logo-regis-del" src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
               />
          </Link>


         <h1 className="restaurant-heading ">
           Become  a delivery person 
       </h1>
       <Loading/>
        </div>
        <div className="column "></div>

     </div>
     </div>
 </section>


       </div>




        );
      }
             

       if(this.state.delnum === 1){ 
        return(
         <div>

           <section className="section-register-restaurant">
       <div className="container">
       
          
          <div className="columns">
           <div className="column "></div>
           <div className="column">

           <Link to="/" >
                <img className="logo-regis-del" src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
            </Link>


           <h1 className="restaurant-heading ">
             Become  a delivery person 
         </h1>
              
               
               <div className="">
                   <h1 className="restaurant-heading">
                       Your personnal details
                   </h1>
                   <br />
 <form  method="post" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>       


        <div className="field">
         <label className="label">First name</label>
          <p className="control has-icons-left has-icons-right">
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
          <p className="control has-icons-left has-icons-right">
        <input className="input"
          name="last_name"
          value={this.state.fields.last_name}
          onChange={this.handleChange}
        type="text" placeholder="E.g Lydia" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.last_name}</p>

        </div>
                  
        <div className="field">
         <label className="label">Email </label>
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
          <p className="control has-icons-left has-icons-right">
        <input className="input"
          name="password"
          value={this.state.fields.password}
          onChange={this.handleChange} type="password" placeholder="E.g MarK@345" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.password}</p>

        </div>
                  
        <div className="field">
         <label className="label">Mobile Phone</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input"
          name="phone_number"
          value={this.state.fields.phone_number}
          onChange={this.handleChange}
        type="text" placeholder="E.g 447XXXXXXXXX" /> 
        
        
         </p>
         <p className="help is-danger">{this.state.errors.phone_number}</p>

        </div>                                   
              
            
            <div className="field ">
             <button  className=" button is-medium btn-fun-co is-fullwidth">
                 Submit
             </button>
          </div>     

        </form>

              
        </div>
                           <br/>
             <br />
           </div>
           <div className="column "></div>
          </div>
           
       </div>
   </section>


         </div>

        )
    }



    if(this.state.delnum === 2){

      return(

        <div>

         
                   <section className="section-register-restaurant">
       <div className="container">
         
          
          <div className="columns">
           <div className="column "></div>
           <div className="column">

             <Link to="/" >
                <img className="logo-regis-del" src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
            </Link>


           <h1 className="restaurant-heading ">
             Become  a delivery person 
         </h1>

               
               <div className="">

                   
                   <br />
                   <br />
                   <form  method="post" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>       


        <div className="field">
         <label className="label">
         Tell us a bit more about your
motivation for joining  the Fungry's 
biker crowd ( max 100 words).</label>
          <p className="control has-icons-left has-icons-right">
        <textarea className="textarea"
        
        name="motivation"
         value={this.state.fieldsdelivery.motivation}
         onChange={this.handleChange}
        
        
        placeholder="e.g I'm a student looking for an extra income. I love biking and I love good food hence my wish to join Fungry." 
 />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.motivation}</p>

        </div>
                  
         <div className="field">
         <label className="label">
Tell us more about availabilities</label>
          <p className="control has-icons-left has-icons-right">
          <div>
        <textarea
         className="textarea"
         name="availabilies"
         value={this.state.fieldsdelivery.availabilies}
         onChange={this.handleChange}
        placeholder="e.g I would be available to deliver on 
        Mondays, Wednesdays and Thursdays from 6 tp 8 pm" 
        
       />
       </div>
        
         </p>
         <p className="help is-danger">{this.state.errors.availabilies}</p>

        </div>
                  
                                        
              
            
            <div className="field ">
             <button  className=" button is-medium btn-fun-co is-fullwidth">
                 Submit
             </button>
          </div>                        
        
</form>
              
        </div>
                           <br/>
             <br/> 
           </div>
           <div className="column "></div>
          </div>
           
       </div>
   </section>
   
   
   

 







        </div>
      )

    } 

    else 
    {

        return(
        <div>
              

      
      <section class="section-register-restaurant">
       <div class="container">
       
          
          <div class="columns is-centered">
           <div class="column is-half ">
           <Link to="/" >
                <img className="logo-regis-del" src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
            </Link>


           <h1 className="restaurant-heading ">
             Become  a delivery person 
         </h1>
               <br/>
               <br/>
               
               <div class="">

          <div class="field">
              <b>
                 Thank you for your submitting your details. A member of the team will contact you shortly.
              </b>  
            </div>    
              
              
            <div class="field thankyou-padd">
                <b>
                    Got questions? Read our 
                    <Link to="/" > FQAs </Link> or 
                    <Link to="/Contactus" > contact us </Link>
                </b>
            </div>  
             
              
        </div>
                           <br/>
             <br/>
           </div>
          </div>
           
       </div>
   </section>
   






        </div>
 


        )
    }

    }
    
}



const mapStateToProps = state => {
  return {
  loading:state.deliveryReducer.loading,
  error:state.deliveryReducer.error,
  message:state.deliveryReducer.message
  }
};

 const mapDispatchToProps = dispatch => ({
  deliveryRegister: (registerData) => dispatch(actions.registerDelivery(registerData))
 }); 





export default connect(mapStateToProps,mapDispatchToProps)(Deliverypersonregister);