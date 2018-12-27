import React, { Component } from 'react';
import Restaurantheader from '../common/Restaurantheader';
import {Link } from  'react-router-dom';
import { connect } from 'react-redux';
import  Loading from '../../../components/Loader/Loading';
import * as actions from  '../actions';



/**
 * @class Restaurantheader  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Restaurantreginfo  extends Component {

  componentDidMount() {
     
    window.scrollTo(0, 0);
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
          num:1,
          fields: {
            first_name:'',
            last_name:'',
            phone_number:'',
            password:'',
            email:''
          },
          fieldsres:{
            restaurant_name:'',
            city:'',
            postcode:'',
            address_line1:'',
            address_line2:'',
            restaurant_phone_number:''
          },
          errors: {},
          message:'',
          statesr:{}
        
        }

        this.handleChange = this.handleChange.bind(this);

        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    
    }









    
    handleChange =(e) =>{
      
    if(this.state.num === 2){

        let fieldsres = this.state.fieldsres;
        fieldsres[e.target.name] = e.target.value;
        this.setState({
            fieldsres
        });
    } 

     let fields = this.state.fields;
     fields[e.target.name] = e.target.value;
     this.setState({
       fields
     });

    };





      


   submituserRegistrationForm =(e) => {
     e.preventDefault();


     if(this.state.num === 2){
         //
         //In this method i just  set  the state  of the  fields 
         //i dont sent any  data is  only when i submit the seconde
         //field  that  i can  set the overall state
         //
        if (this.validateForm2()) {
            let fieldsres = {};
           
            fieldsres["restaurant_phone_number"] ="";
            fieldsres["restaurant_name"] = "";
            fieldsres["address_line1"] = "";
            fieldsres["address_line2"] = "";
            fieldsres["city"] = "";
            fieldsres["postcode"] ="";
            
   
          this.setState({fieldsres:fieldsres});
         this.RegisterrestaurantData();
         this.setState({message:'Registration completed, please check your Mail'}); 

   
        }
  


     }
     else if(this.state.num === 1){

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

             this.setState({fields:fields});
             this.setState({num:this.state.num+1});
             this.statesr = this.state.fields;

         }
    }



   }





    //Register  client information
    
    RegisterrestaurantData =()=> {

         
        var  Registerrestaurantdata  = {
           requestName:btoa(btoa(btoa("registration"))),
           data:{
             account_type:"restaurant",
             ...this.state.fields,
             ...this.statesr
           }
           
        } 

        console.log(Registerrestaurantdata);
        this.props.restaurantRegister(Registerrestaurantdata);
        this.setState({num:this.state.num+1});

 

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
       if (!fields["first_name"].match(/^(\?-)[a-zA-Z ]*$/)) {
         formIsValid = false;
         errors["first_name"] = "*Please enter alphabet characters only.";
       }
     }*/
    
     if (!fields["last_name"]) {
       formIsValid = false;
       errors["last_name"] = "*Please enter your lastname.";
     }

     /*if (typeof fields["last_name"] !== "undefined") {
       if (!fields["last_name"].match(/^(\?-)[a-zA-Z ]*$/)) {
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
         errors["email"] = "*Please enter a valid email-ID.";
       }
     }

     if (!fields["phone_number"]) {
       formIsValid = false;
       errors["phone_number"] = "*Please enter your mobile no.";
     }

     if (typeof fields["phone_number"] !== "undefined") {
     if (!fields["phone_number"].match(/^(447)([0-9]{9})/)) {
         formIsValid = false;
         errors["phone_number"] = "*Please entera valid phone number.";
       }
     }

     if (!fields["password"]) {
       formIsValid = false;
       errors["password"] = "*Please enter your password.";
     }

     if (typeof fields["password"] !== "undefined") {
       if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)) {
         formIsValid = false;
         errors["password"] = "*Please password must contain a captial letter, special charactere and number.";
       }
     }
     
    
     this.setState({
       errors: errors
     });
     return formIsValid;


   }  



 validateForm2(){
    let fields = this.state.fields;
     let errors = {};
     let formIsValid = true;

    if (!fields["city"]) {
        formIsValid = false;
        errors["city"] = "*Please enter your city.";
      }
       
      if (!fields["postcode"]) {
        formIsValid = false;
        errors["postcode"] = "*Please enter your postcode.";
      }
    
      if (!fields["address_line1"]) {
        formIsValid = false;
        errors["address_line1"] = "*Please enter your address.";
      }

      if (!fields["address_line2"]) {
        formIsValid = false;
        errors["address_line2"] = "*Please enter your address.";
      }

      
     if (!fields["restaurant_name"]) {
        formIsValid = false;
        errors["restaurant_name"] = "*Please enter your restaurant name.";

      }

      if (!fields["restaurant_phone_number"]) {
        formIsValid = false;
        errors["restaurant_phone_number"] = "*Please enter your phone number.";

      }


      if (typeof fields["restaurant_phone_number"] !== "undefined") {
    if (!fields["restaurant_phone_number"].match(/^07[0-9]{9}$/)) {
        formIsValid = false;
        errors["restaurant_phone_number"] = "*Please enter a valid phone number.";
      }
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
         Register your Restaurant
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
             
      


       if(this.state.num ===2){
         
        return(
        <div>

        <section className="section-register-restaurant">
       <div className="container">
        
          <div className="columns">
           <div className="column "></div>
           <div className="column">
           <Link to="/" >
                <img className="logo-regis-del " src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
            </Link>


           <h1 className="restaurant-heading ">
           Register your Restaurant
         </h1>

               <p>
               In order to register, we will need you to answer a few questions about yourself and your restaurant. A member of our staff will then contact you as soon as possible.
               </p>
               <br />
               <br />
               
        <div className="">
         <h1 className="restaurant-heading">
                       Your Restaurant details
        </h1>
                   
        <br/>
        <br/>
         <form  method="post" name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>       
        <div className="field">
         <label className="label">Restaurant name</label>
          <p className="control ">
        <input className="input"
         name="restaurant_name"
         value={this.state.fieldsres.restaurant_name}
         onChange={this.handleChange}
        type="text" placeholder="E.g Lydia" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.restaurant_name}</p>

        </div>
                  
         <div className="field">
         <label className="label">Phone </label>
            <p className="control  ">
        <input className="input"
         name="restaurant_phone_number"
         value={this.state.fieldsres.restaurant_phone_number}
         onChange={this.handleChange}
        type="text" placeholder="E.g 447XXXXXXXXX" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.restaurant_phone_number}</p>

        </div>
                  
        <div className="field">
         <label className="label">Address line 1 </label>
          <p className="control  ">
        <input className="input"
         name="address_line1"
         value={this.state.fieldsres.address_line1}
         onChange={this.handleChange}
        type="text" placeholder="e.g .." />
        
        </p>
        <p className="help is-danger">{this.state.errors.address_line1}</p>

        </div>          
                  
         <div className="field">
         <label className="label">Address line 2</label>
          <p className="control ">
        <input className="input"
         name="address_line2"
         value={this.state.fieldsres.address_line2}
         onChange={this.handleChange}
        type="text" placeholder="e.g .." />
         
        
         </p>
         <p className="help is-danger">{this.state.errors.address_line2}</p>

        </div>
                  
        <div className="field">
         <label className="label">City</label>
          <p className="control ">
        <input className="input"
         name="city"
         value={this.state.fieldsres.city}
         onChange={this.handleChange}
        type="text" placeholder="Oxford" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.city}</p>

        </div>  
             
          <div className="field">
         <label className="label">Postcode</label>
          <p className="control ">
        <input className="input"
         name="postcode"
         value={this.state.fieldsres.postcode}
         onChange={this.handleChange}
        type="text" placeholder="E.g OX14LG" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.postcode}</p>

        </div>                                      
                                                                                                                
              
            
            <div className="field ">
             <button  className=" button is-medium btn-fun-co is-fullwidth">
                 Submit
             </button>
          </div>                        
        
          </form>   
              
        </div>
         <br />
             <br />
              <p>
                   Main interests to register as a restaurant with Fungry.
               </p> 
           </div>
           <div className="column "></div>
          </div>
           
       </div>
   </section>


   
 </div>
        )
     }
 


  if (this.state.num ===1) {
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
           Register your restaurant
         </h1>

                <p>
                    In order to register , we will first need your personal  details, followed with  your restaurant's details.
                </p>
                <br />
                <br />
                
                <div className="">
                    <h1 className="restaurant-heading">
                        Your personal details
                    </h1>
                    
                    <br />
                    <br />
     <form  method="post"  name="restaurantRegistrationForm"  onSubmit= {this.submituserRegistrationForm}>       

         <div className="field">
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
           <p className="control ">
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
           <p className="control ">
         <input className="input" 
         name="password"
         value={this.state.fields.password}
         onChange={this.handleChange}
         type="password" placeholder="E.g Mark@356" />
         
         
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
              <button className=" button is-medium btn-fun-co is-fullwidth">
                  Submit
              </button>
           </div>                        
         
 
               </form>
         </div>
                            <br/>
              <br/>
               <p>
                    Main interests to register as a restaurant.
                </p> 
            </div>
            <div className="column "></div>
           </div>
            
        </div>
    </section>
    </div>
    
    
  




      )
  }

   else{
       return(
        <div>

         <section className="section-register-restaurant">
         <div className="container">
        
            
            <div className="columns is-centered">
             <div className="column  is-half">
             <Link to="/" >
                <img className="logo-regis-del" src={require('../../../assets/img/fungry-logo.png')} alt="" width="200px" height="200px"
                 />
            </Link>


           <h1 className="restaurant-heading ">
           Register your restaurant
         </h1>
                 <p>
                     In order to register , we will first need your personal  details, followed with  your restaurant's details.
                 </p>
                 <br />
                 <br/>
                 
                 <div className="register-restaurants">
                     <h1 className="register-resto-heading">
                         Thank you!
                     </h1>
                     
                     <br />
                     <br />
                
              <div className="field">
                <b>
                    Thank you for submitting your details. A member of the team will contact you shortly to finalise your registration.
                </b>  
              </div>    
                
                
              <div className="field thankyou-padd">
                  <b>
                      Got questions? Read our FAQs or contact us
                  </b>
              </div>  
              
              <div className="field ">
               <Link to="/" className=" button is-medium btn-fun-co ">
                   FQAs
               </Link>
               <Link to="contactus" className=" button is-medium btn-fun-co move-right ">
                   Contact us
               </Link>
            </div>                        
          
  
                
          </div>
                             <br/>
               <br />
                <p>
                     Main interests to register as a restaurant with Fungry.
                 </p> 
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
  loading:state.restaurantReducer.loading,
  error:state.restaurantReducer.error,
  message:state.restaurantReducer.message
  }
};

 const mapDispatchToProps = dispatch => ({
  restaurantRegister: (registerData) => dispatch(actions.registerRestaurant(registerData))
 }); 









export default connect(mapStateToProps,mapDispatchToProps)(Restaurantreginfo); 