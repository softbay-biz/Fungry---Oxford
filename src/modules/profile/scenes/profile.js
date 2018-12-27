import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import  Loading from '../../../components/Loader/Loading';



/**
 * @class Accountprofile component
 * @description Profile account  
 */


 class Accountprofile extends Component {
    componentDidMount(){
        console.log(this.props.UserInfo);
        this.setState({information:this.props.UserInfo})
        console.log(this.state.information);
}
componentDidUpdate(){
    //this.props.UserInfo = this.props.UpdateInfo;
}



      constructor() {
        super();
        this.state = {
          fields: {
            first_name:'',
            last_name:'',
            phone_number:'',
            email:''
          },
          fields_del: {
            password:'',
            email:''
          },
          errors: {},
          errors_del:{},
          information: {
            first_name:'',
            last_name:'',
            phone_number:'',
            email:''
          },
          delete_account:""

        
        }
        this.handleChange = this.handleChange.bind(this);
        this.submituserUpdateForm = this.submituserUpdateForm.bind(this);
    
        this.handleChange_del = this.handleChange_del.bind(this);
        this.submituserUpdateForm_del = this.submituserUpdateForm_del.bind(this);
    
    
    
      };
      

      updateInformation=()=>{
          console.log(this.state.fields);
          let  id = parseInt(this.props.UserInfo.id_members);
          var updatedata ={
            requestName:btoa(btoa(btoa("updateDetails"))),
            data:{
              id:id,
              '1':["first_name",this.state.fields.first_name],
              'r':["last_name",this.state.fields.last_name],
              's':["phone_number",this.state.fields.phone_number],
              't':["email",this.state.fields.email]
            }
          }
          console.log(updatedata);
          this.props.Update(updatedata);

      }

      updateInformation_del=()=>{
          console.log(this.state.fields_del);
          var formDataToSend = {
            requestName:btoa(btoa(btoa("deleteAccount"))),
            data:{
              email:this.state.fields_del.email,
              password:this.state.fields_del.passsword
            }
            };
          
          this.props.Delete(formDataToSend);
          this.setState({delete_account:"your account have been deleted,logout now to complete  the process"})

      }

      
     handleChange(e){
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
          fields
        });
  
      };
         
      
     handleChange_del(e){
        let fields_del = this.state.fields_del;
        fields_del[e.target.name] = e.target.value;
        this.setState({
          fields_del
        });
  
      };
         
  
  
      submituserUpdateForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["first_name"] = "";
            fields["last_name"] = "";
            fields["email"] = "";
            fields["phone_number"] ="";
            this.setState({fields:fields});
            this.updateInformation();
  
        }
  
      }

      submituserUpdateForm_del(e) {
        e.preventDefault();
        if (this.validateForm_del()) {
            let fields_del = {};
            fields_del["password"] = "";
            fields_del["email"] = "";
            this.setState({fields_del:fields_del});
            this.updateInformation_del();
  
        }
  
      }
  
  
    
      validateForm() {
  
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
  
        if (!fields["first_name"]) {
          formIsValid = false;
          errors["first_name"] = "*Please enter your first name.";
        }
  
       
        if (!fields["last_name"]) {
          formIsValid = false;
          errors["last_name"] = "*Please enter your last name.";
        }
  

  
        if (!fields["email"]) {
          formIsValid = false;
          errors["email"] = "*Please enter your Email-ID.";
        }
  
       
  
        if (!fields["phone_number"]) {
          formIsValid = false;
          errors["phone_number"] = "*Please enter your mobile no.";
        }
  
      
  
  
      
  
        this.setState({
          errors: errors
        });
        return formIsValid;
  
  
      }

    
      validateForm_del() {
  
        let fields_del = this.state.fields_del;
        let errors_del = {};
        let formIsValid = true;
  
       
       
        if (!fields_del["password"]) {
          formIsValid = false;
          errors_del["password"] = "*Please enter your password.";
        }
  

  
        if (!fields_del["email"]) {
          formIsValid = false;
          errors_del["email"] = "*Please enter your Email-ID.";
        }
  
       
  
      
  
  
      
  
        this.setState({
          errors_del: errors_del
        });
        return formIsValid;
  
  
      }









    render(){
      
      if(this.props.loading){

        return(
        <Loading/>
        )

        }

        return(
           <div>


             <section className="delete-account-section">
     <div className="container">
         <h1 className="delete-heading">Hey {(this.props.UserInfo === null ? null:this.props.UserInfo.first_name) }</h1>
       <div className="container">
           <div className="columns">
               <div className="column is-half">
                  <h1 className="delete-heading-title">
                      Would you like to  update your account information ?
                  </h1>
                  
      <div className="field">
         <label className="label">First Name </label>
          <p className="control ">
        <input 
        name="first_name"
        value={this.state.fields.first_name}
        onChange={this.handleChange}
        className="input" type="text" placeholder={(this.props.UserInfo === null ? null:this.props.UserInfo.first_name) } />
        </p>
     
        <p className="help is-danger">{this.state.errors.first_name}</p>

        </div>

      <div className="field">
         <label className="label">Last  Name</label>
          <p className="control ">
        <input 
        name="last_name"
        value={this.state.fields.last_name}
        onChange={this.handleChange}
        className="input" type="text" placeholder={(this.props.UserInfo === null ? null:this.props.UserInfo.last_name) } />
       
         </p>
         <p className="help is-danger">{this.state.errors.last_name}</p>

        </div>


      <div className="field">
         <label className="label">Email address</label>
          <p className="control ">
        <input 
        name="email"
        value={this.state.fields.email}
        onChange={this.handleChange}
         className="input" type="email" placeholder={(this.props.UserInfo === null ? null:this.props.UserInfo.email) } />
         </p>
         <p className="help is-danger">{this.state.errors.email}</p>

        </div>
                  
                         
        <div className="field">
         <label className="label">Mobile Phone</label>
          <p className="control ">
        <input
        name="phone_number"
        value={this.state.fields.phone_number}
        onChange={this.handleChange}
        
        className="input" type="text" placeholder={(this.props.UserInfo === null ? null:this.props.UserInfo.phone_number) } />
        
        
         </p>
         <p className="help is-danger">{this.state.errors.phone_number}</p>

        </div>                                   
              
            
            <div className="field ">
             <a  onClick={this.submituserUpdateForm} className=" button is-medium btn-fun-co-lg">
                 Update account
             </a>
          </div>     
                         
                
                    
                      
                   
               </div>
           </div>
           
           <hr />
           
           
           
           
           
          <div className="columns">
               <div className="column is-half">
                  <h1 className="delete-heading-title">
                      Would you like to  delete your account ?
                  </h1>
                  <p>
                      (if you choose  to do  so , we will  delete all  your personal  information 
from  our database)
                  </p>
                  
   
                  
                         
        <div className="field">
         <label className="label">Enter your email</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" name="email" 
         value={this.state.fields_del.email}
         onChange={this.handleChange_del}
        type="type" placeholder="" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors_del.email}</p>
        </div>  
                                         
        <div className="field">
         <label className="label">Enter your password</label>
          <p className="control has-icons-left has-icons-right">
        <input className="input" name="password"
          value={this.state.fields_del.password}
          onChange={this.handleChange_del}
        type="password" placeholder="" />
        
        
         </p>
         <p className="help is-danger">{this.state.errors_del.password}</p>

        </div>                                   
              
            
            <div className="field ">
             <a  onClick={this.submituserUpdateForm_del} className=" button is-medium btn-fun-co-lg">
                 Delete your  account
             </a>
          </div> 
          <p className="help is-primary">{this.state.delete_account}</p>
    
                         
                
                    
                      
                   
               </div>
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
    loading:state.profileReducer.loading,
    autherror:state.profileReducer.error,
    UserInfo:state.authReducer.userInfo,
    UpdateInfo:state.profileReducer.UserInfo
    }
  };
 
   const mapDispatchToProps = dispatch => ({
    Update: (data) => dispatch(actions.Update(data)),
    Delete: (data) => dispatch(actions.Delete(data))
   });


export  default connect(mapStateToProps,mapDispatchToProps)(Accountprofile);