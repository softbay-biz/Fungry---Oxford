import React, { Component } from 'react';
import {modal} from '../utils/modal'; 


/**
 * @class Restaurantmenu component
 * @description Restauarant profile header to  export  header  for the  restauarnts
 * 
 * 
 * 
 */
class CallModals extends Component {


  constructor() {
    super();
    this.state = {
      fields: {
        image:'',
        restaurant_name:'',
        postcode:'',
      
      },
      errors: {},
      message:''
    
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitupdateResto = this.submitupdateResto.bind(this);
    this.clientrestoUpdate = this.clientrestoUpdate.bind(this);
    this.UploadFiles= this.UploadFiles.bind(this);
  };




  componentDidMount(){
    
  }

  clientrestoUpdate(){
    let  id = parseInt(this.props.id);
 console.log(this.state.fields.image);
    let formDataToSend = {
      requestName:btoa(btoa(btoa("updateDetails"))),
      data:{id:23,
        's':["image",btoa(this.state.fields.image)],
        'm':["postcode",this.state.fields.postcode],
        't':["restaurant_name",this.state.fields.restaurant_name]
      }
      };
     console.log(formDataToSend);
      this.props.Updateprofile(formDataToSend);
  }
  UploadFiles(files,ans){
    let elt = "";  
   let reader = new FileReader();
     reader.addEventListener("load", function(){
         ans = this.result;
     },false);
     reader.readAsDataURL(files);      
   }


  handleChange(e){
    let fields = this.state.fields;
    let filedname =e.target.name;
    if(e.target.name === "image"){
      let reader = new FileReader();
     reader.addEventListener("load", function(){
      fields[filedname] = this.result;
      console.log(this.result);

     },false);
     reader.readAsDataURL(e.target.files[0]);      
   

    }else{
      fields[e.target.name] = e.target.value;

    }
    this.setState({
      fields
    });
  }

  submitupdateResto(e){
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["image"] = "";
        fields["restaurant_name"] = "";
        fields["postcode"] = "";
        this.setState({fields:fields});
        this.clientrestoUpdate();
      
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["image"]) {
      formIsValid = false;
      errors["image"] = "*Please enter your image.";
    }

    if (!fields["restaurant_name"]) {
      formIsValid = false;
      errors["restaurant_name"] = "*Please enter your restaurant_name.";
    }

    if (!fields["postcode"]) {
      formIsValid = false;
      errors["postcode"] = "*Please enter your postcode.";
    }



    this.setState({
      errors: errors
    });
    return formIsValid;


  }  












   render(){

 
  




    return(
    
  <div className="modal ">
    <div className="modal-background"></div>
    <div className="modal-card">
      <header className="modal-card-head">
        <p className="modal-card-title"> Edit Restaurant Information</p>
        <button className="delete" id="close" aria-label="close"></button>
      </header>
      <div className="modal-card-body">
      <div className="columns ">
                      <div className="column is-8">
                      <label className="label">Restaurant  name</label>
                        <input className="input"
                        name="restaurant_name"
                        onChange={this.handleChange}
                        placeholder={this.props.name}/>
              <p className="help is-danger">{this.state.errors.restaurant_name}</p>

                         <br/>

                       <label className="label">Postal code </label>

                         <input className="input"
                         name="postcode"
                         onChange={this.handleChange}
                        placeholder={this.props.postcode} />
                     <p className="help is-danger">{this.state.errors.postcode}</p>

                       <br/>
                         <br/>

                         <label className="label">Restaurant  Profile  picture</label>

                         <input className="input"
                       name="image"
                       onChange={this.handleChange}
                       type="file"  
                       placeholder={this.props.image}
                       />
                <p className="help is-danger">{this.state.errors.image}</p>

     
                      </div>
                      <div className="column is-one-third is-vcentered">
                          
                          
                         
                      </div>
                      
                  </div>
  
      </div>
      <footer className="modal-card-foot">
        <button onClick={this.submitupdateResto} className="button btn-fun-co">Update</button>
        <button className="button btn-fun-li" id="close-btn">Cancel</button>
      </footer>
    </div>
  </div>
  
      )
    }
   }




class Restauarntsmenu  extends Component {

  render(){
     
    return(
        <div onClick={modal}>
             
   <div   className="section-restaurants-food" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(http://fungry.club/dev/images/"+this.props.image+")"}}>
       <div className="container">
           <div className="columns">
               <div className="column">
                  <div className="restaurant-info">
                     <h1>
                        Restaurant name :  {this.props.name}
                     </h1>
                     <br/>
                     <h3>
                       Post code :{this.props.postcode}
                     </h3>

                     <br/>
                    <button className="button btn-fun-co" id="open">
                    <strong className="open">
                           Edite
                    </strong> 
                    </button>          
                  </div>
                   
               </div>
               <div className="column"></div>
           </div>
       </div>
       <CallModals 
       {...this.props}
       />
   </div>
    




<div className="section-restauant-food-menu">
    <div className="container">
        <div className="navbar-menu food-type-menu">
            <div className="navbar-start items-of-nav">
                <a className="navbar-item ">
                 Most ordered
                 </a>
                <a className="navbar-item">
                Starter
                </a>
                <a className="navbar-item">
                  Main
                 </a>
                <a className="navbar-item">
                Dessert
              </a>
               
            </div>

           
        </div>
      </div>
     </div>
</div>


    )
  }
};



export default Restauarntsmenu;