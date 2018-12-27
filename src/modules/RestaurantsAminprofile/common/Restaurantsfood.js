import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import {modal} from '../utils/modal'; 



/**
 * @class Restaurantfood component
 * @description Restauarantfood to  export  header  for the  restauarnts
 */



 class CallModal extends Component  {




  constructor() {
    super();
    this.state = {
      fields: {
        dish_name:"",
        dish_price:"",
        dish_description:"",
        dish_category_id:null,
        dish_sub_category_id:null,
        dish_sub_sub_category_id:null,
        dish_sub_sub_sub_category_id:null,
        id_restaurant: 4,
        image:""
      },
      errors: {},
      message:''
    
    }

    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.submitupdateRestoAdd = this.submitupdateRestoAdd.bind(this);
    this.clientrestoUpdateAdd = this.clientrestoUpdateAdd.bind(this);
  };
  componentDidMount(){
    
    console.log(this.props.category)
     
  }
 



  clientrestoUpdateAdd(){
    let id= parseInt(this.props.data.id)
   let cat =  parseInt(this.state.fields.dish_category_id); 
   let cat_sub =  parseInt(this.state.fields.dish_sub_category_id); 
   let cat_sub_sub =  parseInt(this.state.fields.dish_sub_sub_category_id); 
   let cat_sub_sub_sub =  parseInt(this.state.fields.dish_sub_sub_sub_category_id); 
   let amount =  this.state.fields.dish_price; 

    var formDataToSend = {
      requestName:btoa(btoa(btoa("newDish"))),
      data:{
        dish_name:this.state.fields.dish_name,
        dish_price:amount.toString(),
        dish_description:this.state.fields.dish_description,
        dish_category_id:cat,
        dish_sub_category_id:cat_sub,
        dish_sub_sub_category_id:cat_sub_sub,
        dish_sub_sub_sub_category_id:cat_sub_sub_sub,
        id_restaurant: id,
        image:this.state.fields.image
      }
    };
  console.log(formDataToSend);
    this.props.AddMenu(formDataToSend);

  }


  handleChangeAdd(e){
    let fields = this.state.fields;
    let filedname =e.target.name;

    if(e.target.name === "image"){
      let reader = new FileReader();
     reader.addEventListener("load", function(){
      fields[filedname] = this.result;

     },false);
     reader.readAsDataURL(e.target.files[0]);      
   
    }else{
      fields[e.target.name] = e.target.value;

    }
    this.setState({
      fields
    });

  }

submitupdateRestoAdd(e){
  e.preventDefault();
  if (this.validateForm()) {
      let fields = {};
      fields["dish_name"] = "";
      fields["dish_price"] = "";
      fields["dish_description"] = "";
      fields["dish_category_id"] = "";
      fields["dish_sub_category_id"] = "";
      fields["dish_sub_sub_category_id"] = "";
      fields["dish_sub_sub_sub_category_id"] = "";
      fields["image"] = "";
      this.setState({fields:fields});
      this.clientrestoUpdateAdd();
  }
}




validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  if (!fields["dish_name"]) {
    formIsValid = false;
    errors["dish_name"] = "*Please enter your dish name.";
  }

 

 
  if (!fields["dish_price"]) {
    formIsValid = false;
    errors["dish_price"] = "*Please enter your dish price.";
  }

  if (!fields["dish_description"]) {
    formIsValid = false;
    errors["dish_description"] = "*Please enter your dish description.";
  }
  if (!fields["image"]) {
    formIsValid = false;
    errors["image"] = "*Please enter your image.";
  }

  if (!fields["dish_category_id"]) {
    formIsValid = false;
    errors["dish_category_id"] = "*Please enter your dish category.";
  }

  if (!fields["dish_sub_category_id"]) {
    formIsValid = false;
    errors["dish_sub_category_id"] = "*Please enter your dish sub category id.";
  }
  if (!fields["dish_sub_sub_category_id"]) {
    formIsValid = false;
    errors["dish_sub_sub_category_id"] = "*Please enter your dish sub sub category id.";
  }

  if (!fields["dish_sub_sub_sub_category_id"]) {
    formIsValid = false;
    errors["dish_sub_sub_sub_category_id"] = "*Please enter your dish sub sub sub category id.";
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
        <p className="modal-card-title"> Add a new dish to your restaurant</p>
        <button className="delete" id="close" aria-label="close"></button>
            </header>
      <div className="modal-card-body">
       <div className="columns ">
     <div className="column ">
       <label className="label">Dish name</label>
       <input className="input"
         name="dish_name"
         onChange={this.handleChangeAdd}
         placeholder={this.props.name}
        type="text" id=""  />
        <br/>
<p className="help is-danger">{this.state.errors.dish_name}</p>

        <br/>
                
        <label className="label">Dish description</label>
       <input className="input"
         name="dish_description"
         placeholder={this.props.description}
         onChange={this.handleChangeAdd}
        type="text" id=""  />
        <br/>
     <p className="help is-danger">{this.state.errors.dish_description}</p>

        <br/>      





        <label className="label">Dish price</label>
       <input className="input"
       name="dish_price"
       placeholder={this.props.price}
       onChange={this.handleChangeAdd}
       type="number"         placeholder="1" />
          <p className="help is-danger">{this.state.errors.dish_price}</p>

         <br/>
         <label className="label">Dish  image</label>
       <input className="input"
       placeholder={this.props.image}
       name="image"
       onChange={this.handleChangeAdd}
       type="file"    />
       <br/>
    <p className="help is-danger">{this.state.errors.image}</p>

         <br/>                    
       <label className="label">Dish  Category</label>
       <div className="select">
       <select className="input"
       name="dish_category_id"
       onChange={this.handleChangeAdd}
       >
       {
          (this.props.category)?this.props.category.category.map((x) =>{
             return <option key={x.id} value={x.name}>{x.name}</option>
          }) :""
          
       }
       

       

       </select>
       <br/>

       </div>
       <p className="help is-danger">{this.state.errors.dish_category_id}</p>

       
        <br/>
        <label className="label">Dish sub Category</label>
       <div className="select">
       <select className="input"
       name="dish_sub_category_id"
       onChange={this.handleChangeAdd}
       >
        {
          (this.props.category)?this.props.category.sub_category.map((x) =>{
             return <option key={x.id} value={x.name}>{x.name}</option>
          }) :""
       }

       </select>
       <br/>

       </div>
       <p className="help is-danger">{this.state.errors.dish_sub_category_id}</p>

       
        <br/>
        <label className="label">Dish sub sub  Category</label>
       <div className="select">
       <select className="input"
       name="dish_sub_sub_category_id"
       onChange={this.handleChangeAdd}
       >
        {
          (this.props.category)?this.props.category.sub_sub_category.map((x) =>{
             return <option key={x.id} value={x.name}>{x.name}</option>
          }) :""
       }
       </select>
       <br/>

       </div>
       <p className="help is-danger">{this.state.errors.dish_sub_sub_category_id}</p>

       
        <br/>
        <label className="label">Dish sub sub sub  Category</label>
       <div className="select">
       <select className="input"
       name="dish_sub_sub_sub_category_id"
       onChange={this.handleChangeAdd}
       >
       {
          (this.props.category)?this.props.category.sub_sub_sub_category.map((x) =>{
             return <option key={x.id} value={x.name}>{x.name}</option>
          }) :""
       }
       </select>
       <br/>

       </div>
       <p className="help is-danger">{this.state.errors.dish_sub_sub_sub_category_id}</p>

        <br/>
   


     </div>
    
 </div>

</div>
<footer className="modal-card-foot">
<button 
onClick={this.submitupdateRestoAdd}  
className="button btn-fun-co" id="close-btn-cls">Upadate Menu
</button>
<button className="button btn-fun-li" id="close-btn">Cancel</button>
</footer>
</div>
</div>
    )
 }
 }








const MenuList =(props) => {



return (
<div onClick={modal}>
  <div className="food-types-food">
  <article className="media">

<div className="media-content">
  <div className="content">
    
      <strong >{props.name}</strong> 
      <br/>
      <p className="dish-name">
          <strong>
          Category :{props.cat}
      </strong>
      </p>
      
      <br/>
      <p className="dish-price">
        <strong >
           {props.price}£
       </strong>  
      </p>
       
      <button  className="dish-price button btn-fun-li" id="open-modal">
        <strong className="open-modal">
            Edite
       </strong>  
      </button>
      <br/>
      <br/>
      <button onClick={()=>{
      props.DeleteDish(props.data.id,props.id);
      window.location.reload();
      }}  className="button btn-fun-li">
            Delete Menu
      </button>
  </div>

</div>
 <figure className="media-right">
  <p className="image is-128x128">
    <img className="image is-128x128" src={"http://fungry.club/dev/images/dish_image_800px/"+props.picture}
    alt=""
    />
  </p>
</figure>
</article>
</div>

  <CallModal
   {...this.props}
   {...props}
   />




</div>



)

}




const Restaurant = (props) => {
  var Mydata = props.Menu;
  
  var menudeatils ="No Dish  Added";
  if(props.Menu !== null  && props.Menu !== undefined){
  menudeatils =  Object.values(Mydata).map((Mydata) => (
               
    <MenuList
      key={Mydata.id}
      id={Mydata.id}
      price={Mydata.price}
      picture={Mydata.image}
      names={Mydata.Menulast}
      name={Mydata.name}
     
      cat={Mydata.id_category}
      cat_sub={Mydata.id_sub_category}
      cat_sub_sub={Mydata.id_sub_sub_category}
      cat_sub_sub_sub={Mydata.id_sub_sub_sub_category}
      {...this.props}
      {...props}
      

     />
    
  ));
  }

  return  menudeatils;


}





class Restauarntsfood extends Component { 

  constructor() {
    super();
    this.state = {
      fields: {
        dish_name:"",
        dish_price:"",
        dish_description:"",
        dish_category_id:null,
        dish_sub_category_id:null,
        dish_sub_sub_category_id:null,
        dish_sub_sub_sub_category_id:null,
        id_restaurant: 4,
        image:""
      },
      errors: {},
      message:''
    
    }

    this.handleChangeAdd = this.handleChangeAdd.bind(this);
    this.submitupdateRestoAdd = this.submitupdateRestoAdd.bind(this);
    this.clientrestoUpdateAdd = this.clientrestoUpdateAdd.bind(this);
  };
  componentDidMount(){
    
   
     
  }
 



  clientrestoUpdateAdd(){
    let id= parseInt(this.props.data.id)
   let cat =  parseInt(this.state.fields.dish_category_id); 
   let cat_sub =  parseInt(this.state.fields.dish_sub_category_id); 
   let cat_sub_sub =  parseInt(this.state.fields.dish_sub_sub_category_id); 
   let cat_sub_sub_sub =  parseInt(this.state.fields.dish_sub_sub_sub_category_id); 
   let amount =  this.state.fields.dish_price; 

    var formDataToSend = {
      requestName:btoa(btoa(btoa("newDish"))),
      data:{
        dish_name:this.state.fields.dish_name,
        dish_price:amount.toString(),
        dish_description:this.state.fields.dish_description,
        dish_category_id:cat,
        dish_sub_category_id:cat_sub,
        dish_sub_sub_category_id:cat_sub_sub,
        dish_sub_sub_sub_category_id:cat_sub_sub_sub,
        id_restaurant: id,
        image:this.state.fields.image
      }
    };
 
    this.props.AddMenu(formDataToSend);

  }


  handleChangeAdd(e){
    let fields = this.state.fields;
    let filedname =e.target.name;

    if(e.target.name === "image"){
      let reader = new FileReader();
     reader.addEventListener("load", function(){
      fields[filedname] = this.result;

     },false);
     reader.readAsDataURL(e.target.files[0]);      
   
    }else{
      fields[e.target.name] = e.target.value;

    }
    this.setState({
      fields
    });

  }

submitupdateRestoAdd(e){
  e.preventDefault();
  if (this.validateForm()) {
      let fields = {};
      fields["dish_name"] = "";
      fields["dish_price"] = "";
      fields["dish_description"] = "";
      fields["dish_category_id"] = "";
      fields["dish_sub_category_id"] = "";
      fields["dish_sub_sub_category_id"] = "";
      fields["dish_sub_sub_sub_category_id"] = "";
      fields["image"] = "";
      this.setState({fields:fields});
      this.clientrestoUpdateAdd();
  }
}




validateForm() {

  let fields = this.state.fields;
  let errors = {};
  let formIsValid = true;

  if (!fields["dish_name"]) {
    formIsValid = false;
    errors["dish_name"] = "*Please enter your dish name.";
  }

 

 
  if (!fields["dish_price"]) {
    formIsValid = false;
    errors["dish_price"] = "*Please enter your dish price.";
  }

  if (!fields["dish_description"]) {
    formIsValid = false;
    errors["dish_description"] = "*Please enter your dish description.";
  }
  if (!fields["image"]) {
    formIsValid = false;
    errors["image"] = "*Please enter your image.";
  }

  if (!fields["dish_category_id"]) {
    formIsValid = false;
    errors["dish_category_id"] = "*Please enter your dish category.";
  }

  if (!fields["dish_sub_category_id"]) {
    formIsValid = false;
    errors["dish_sub_category_id"] = "*Please enter your dish sub category id.";
  }
  if (!fields["dish_sub_sub_category_id"]) {
    formIsValid = false;
    errors["dish_sub_sub_category_id"] = "*Please enter your dish sub sub category id.";
  }

  if (!fields["dish_sub_sub_sub_category_id"]) {
    formIsValid = false;
    errors["dish_sub_sub_sub_category_id"] = "*Please enter your dish sub sub sub category id.";
  }



  this.setState({
    errors: errors
  });
  return formIsValid;


}  









 render(){


 return(
          
    <div   className="column">
              <div >
               <h3 className="food-types-head">
                {this.props.name}
               </h3>
               
                <Restaurant
                 key={1}
                 Menu = {this.props.menu}
                 
                  {...this.props}
                />
                <br/>
                <div onClick={modal} >
                <button className="button  btn-fun-li" id="open-add">
                      <strong className="open-add">
                      Add New Menu
                        </strong> 
                 </button>





                  <div className="modal ">
                   <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                       <p className="modal-card-title"> Add a new dish to your restaurant</p>
                       <button className="delete" id="close" aria-label="close"></button>
                           </header>
                     <div className="modal-card-body">
                      <div className="columns ">
                    <div className="column ">
                      <label className="label">Dish name</label>
                      <input className="input"
                        name="dish_name"
                        onChange={this.handleChangeAdd}
                       type="text" id=""  />
                       <br/>
               <p className="help is-danger">{this.state.errors.dish_name}</p>

                       <br/>
                               
                       <label className="label">Dish description</label>
                      <input className="input"
                        name="dish_description"
                        onChange={this.handleChangeAdd}
                       type="text" id=""  />
                       <br/>
                    <p className="help is-danger">{this.state.errors.dish_description}</p>

                       <br/>      





                       <label className="label">Dish price</label>
                      <input className="input"
                      name="dish_price"
                      onChange={this.handleChangeAdd}
                      type="number"         placeholder="1" />
                         <p className="help is-danger">{this.state.errors.dish_price}</p>

                        <br/>
                        <label className="label">Dish  image</label>
                      <input className="input"
                      name="image"
                      onChange={this.handleChangeAdd}
                      type="file"    />
                      <br/>
                   <p className="help is-danger">{this.state.errors.image}</p>

                        <br/>                    
                      <label className="label">Dish  Category</label>
                      <div className="select">
                      <select className="input"
                      name="dish_category_id"
                      onChange={this.handleChangeAdd}
                      >
                      {
                         (this.props.category)?this.props.category.category.map((x) =>{
                            return <option key={x.id} value={x.id}>{x.name}</option>
                         }) :""
                      }
                      

                      

                      </select>
                      <br/>

                      </div>
                      <p className="help is-danger">{this.state.errors.dish_category_id}</p>

                      
                       <br/>
                       <label className="label">Dish sub Category</label>
                      <div className="select">
                      <select className="input"
                      name="dish_sub_category_id"
                      onChange={this.handleChangeAdd}
                      >
                       {
                         (this.props.category)?this.props.category.sub_category.map((x) =>{
                            return <option key={x.id} value={x.id}>{x.name}</option>
                         }):""
                      }

                      </select>
                      <br/>

                      </div>
                      <p className="help is-danger">{this.state.errors.dish_sub_category_id}</p>

                      
                       <br/>
                       <label className="label">Dish sub sub  Category</label>
                      <div className="select">
                      <select className="input"
                      name="dish_sub_sub_category_id"
                      onChange={this.handleChangeAdd}
                      >
                       {
                         (this.props.category)?this.props.category.sub_sub_category.map((x) =>{
                            return <option key={x.id} value={x.id}>{x.name}</option>
                         }):""
                      }
                      </select>
                      <br/>

                      </div>
                      <p className="help is-danger">{this.state.errors.dish_sub_sub_category_id}</p>

                      
                       <br/>
                       <label className="label">Dish sub sub sub  Category</label>
                      <div className="select">
                      <select className="input"
                      name="dish_sub_sub_sub_category_id"
                      onChange={this.handleChangeAdd}
                      >
                      {
                         (this.props.category)?this.props.category.sub_sub_sub_category.map((x) =>{
                            return <option key={x.id} value={x.id}>{x.name}</option>
                         }):""
                      }
                      </select>
                      <br/>

                      </div>
                      <p className="help is-danger">{this.state.errors.dish_sub_sub_sub_category_id}</p>

                       <br/>
                  


                    </div>
                   
                </div>

    </div>
    <footer className="modal-card-foot">
      <button 
      onClick={this.submitupdateRestoAdd}  
       className="button btn-fun-co" id="close-btn-cls">Add Menu
    </button>
      <button className="button btn-fun-li" id="close-btn">Cancel</button>
      
    </footer>
  </div>
</div>
                </div>
                 
              </div>













</div>


)
 }
}

const mapDispatchToProps = dispatch => ({
  remele :()=>dispatch(actions.Updateprofile())
});



export default connect(null,mapDispatchToProps)(Restauarntsfood);