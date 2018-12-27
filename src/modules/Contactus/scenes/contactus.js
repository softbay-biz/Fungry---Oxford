import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import  Loading from '../../../components/Loader/Loading';
import * as actions from  '../actions';
import Popup from "reactjs-popup";


/**
 * @class RContactus  component
 * @description Restaurantsheader  to  export  header  for the  restauarnts
 */


 class Contactus extends Component {


  componentDidMount() {
    window.scrollTo(0, 0)
  }

    constructor() {
        super();
        this.state = {
          connum:1,
          fields: {
            subject:'',
            message:'',
            email:'',
            phone_number:''
          
          },
           open: true ,
          errors: {},
          message:'',
        
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

          nextPage =(e) => {
              this.setState({connum:this.state.connum+1});
          } 


           submitContactusForm =(e) => {
            e.preventDefault();
       
       
                //
                //In this method i just  set  the state  of the  fields 
                //i dont sent any  data is  only when i submit the seconde
                //field  that  i can  set the overall state
                //
               if (this.validateForm()) {
                   let fields = {};
                  
                   fields["message"] ="";
                   fields["phone_number"] = "";
                   fields["subject"] = "";
                   fields["email"] = "";
                   
          
                   this.setState({fields:fields});
       
                   
   
                   this.RegisterrestaurantData();
                   this.setState({message:'Registration completed , please check your Mail'});
          
       
          
               }
         
       
       
            }


                    //Register  client information
        
        RegisterrestaurantData =()=> {
    
             
            var  Registerdeliverydata  = {
               requestName:btoa(btoa(btoa("contactus"))),
               data:{
                 ...this.state.fields
               }
               
            } 

            this.props.contactUS(this.state.fields.message,this.state.fields.subject,this.state.fields.message,this.state.fields.phone_number);
    
       
    
       }


            
    
     validateForm= ()=>{
    
        let fields= this.state.fields;
         let errors = {};
         let formIsValid = true;
    
        if (!fields["subject"]) {
            formIsValid = false;
            errors["subject"] = "*Please enter your message subject.";
          }
           
          if (!fields["message"]) {
            formIsValid = false;
            errors["message"] = "*Please enter your message.";
          }

          if (!fields["phone_number"]) {
            formIsValid = false;
            errors["phone_number"] = "*Please enter your mobile no.";
          }
     
          if (typeof fields["phone_number"] !== "undefined") {
          if (!fields["phone_number"].match(/^07[0-9]{9}$/)) {
              formIsValid = false;
              errors["phone_number"] = "*Please enter a valid phone number.";
            }
          }



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
         
        
   
    
          this.setState({
            errors: errors
          });
          return formIsValid;
    
     };
    

   

     












        render() {

                
        



        
        let Contactform = (
            <div className="column is-half">
            <form onSubmit={this.submitContactusForm}  >

            <div className="field">
            <label className="label tiitle is-4">Contact us</label>
         
            </div>
            <br/>
            
            <div className="field">
            <label className="label">Subject</label>
            <div className="control">
              <input className="input"
               name="subject"
               value={this.state.fields.subject}
               onChange={this.handleChange}
              type="text" placeholder="Food not delivered"/>
            </div>
            <p className="help is-danger">{this.state.errors.subject}</p>

          </div>
          
          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left">
              <input className="input "
               name="email"
               value={this.state.fields.email}
               onChange={this.handleChange}
              type="email" placeholder="e.g name@gmail.com" />
              <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>

              </span>
             
            </div>
            <p className="help is-danger">{this.state.errors.email}</p>

          </div>
          
          <div className="field">
            <label className="label">Phone number</label>
            <div className="control has-icons-left ">
              <input className="input" 
                name="phone_number"
                value={this.state.fields.phone_number}
                onChange={this.handleChange}
              type="text" placeholder="+07446633565"  />
              <span className="icon is-small is-left">
                <i className="fas fa-mobile"></i>
              </span>
             
            </div>
            <p className="help is-danger">{this.state.errors.phone_number}</p>


          </div>
       
          
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
               name="message"
               value={this.state.fields.message}
               onChange={this.handleChange}
              className="textarea" placeholder="Type your message"></textarea>
            </div>
            <p className="help is-danger">{this.state.errors.message}</p>

          </div>
          
          <div className="field">
         
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-medium btn-fun-co is-fullwidth">Submit</button>
              <p className="help is-success">{this.props.message}</p>
              <p className="help is-danger">{this.props.error}</p>
            </div>
           
          </div>
          </div>

          </form>
          </div>

        )





  if(this.state.connum === 1){


     Contactform = (
         <div>
            
            <div className="column">

            <h1 className="aboutus-heading">
            Costumer service enquiries 

             
             
         </h1>
         
         <p className="page-404">
           <strong>
               Have  you got questions about  your
order?
We are here to help!
           </strong>  
        </p>
        
       
     </div>
     <div className="column">
            <h1 className="aboutus-heading">
           General enquiries
             
             
         </h1>
         
         <p className="page-404">
           <strong>
              
If you want  to get  in touch  with us, please 
feel  free  to contact us  as  well.A team member
will  come back to  you  shortly
           </strong>  
        </p>


         <br/>
         <br/>
         <br/>
         <button onClick={this.nextPage} className="button btn-fun-co move-right">
             Contact us
         </button>
         
         
         
     </div>
     </div>

         );


        }

        if(this.props.loading){

            Contactform =(

                <Loading/>
            )


        }  
      


             
        return(
           <div>


             <section className="section-aboutus">
           <div className="container">
          <div className="columns is-centered">

                {Contactform}
                
          </div>
      </div>
      {<Popup open={this.props.open} position="right center">
        <div>
        <br/>
           <br/>
           <h3>
           <center className="color">{this.props.message}</center> 
          </h3>
          
          <br/>
           <br/></div>
      </Popup>}
  </section>
   
   
               
           </div>

        )

    }
}



const mapStateToProps = state => {
    return {
    loading:state.contactReducer.loading,
    error:state.contactReducer.error,
    message:state.contactReducer.message,
    open:state.contactReducer.open
    }
  };
  
   const mapDispatchToProps = dispatch => ({
    contactUS: (email,subject,message,phone_number) => dispatch(actions.contactUS(email,subject,message,phone_number))
   }); 




export  default connect(mapStateToProps,mapDispatchToProps)(Contactus);