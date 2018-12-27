import React, { Component } from 'react';
import  {dropdown} from  '../utils/main';
import  axios from  'axios';
import * as actions from  '../actions';


var categories_tab = new Array();
    const getCategory = ()=>{
         var formDataToSend = {
            requestName:btoa(btoa(btoa("getCategories"))),
            data:{
            }
          };


       axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend ,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }})
            .then(
           reponse => {
                Object.entries(reponse.data.sub_category).forEach(
                  ([cle, valeur]) => categories_tab.push(valeur.name)
                  );
           })
       .catch( error => {
         
         console.log(error);
 
       })  
    };getCategory();
    const getRestaurant = ()=>{
         var formDataToSend = {
            requestName:btoa(btoa(btoa("searchRestaurant"))),
            data:{
              search_type:"none",
            }
          };


       axios.post("http://fungry.club/dev/API/entryPoint.php",formDataToSend ,
       {headers : {
                  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
              }})
            .then(
           reponse => {
                 Object.entries(reponse.data).forEach(
                    ([cle, valeur]) => categories_tab.push(valeur.restaurant_name)
                  );
           })
       .catch( error => {
         
         console.log(error);
 
       })  
    };getRestaurant();
class Restauarntssearch  extends Component {

 constructor(props){
        super(props);        
     }
   
  componentDidMount() {
    dropdown();
    var fix = document.getElementById("fix-footer");    
  }

  render(){

 return(                
<section className="section-searchbar">
    <div className="container">
        <div className="columns">
            <div className="column">
               <div className="field has-addons">
                <div className="control has-icons-left is-expanded" id="autocomplete" onClick={(e)=>{
                  if(e.target.className === "item"){
                    let search = document.getElementById("serachBarRestaurant");
                    search.value = e.target.innerHTML;
                    actions.closeAllLists();
                    let val = '"'+e.target.innerHTML+'"';
                              document.getElementById("messageSearchResult").innerHTML = `Result for ${val}`;
                              document.getElementById("result-search").style.display = "block";
                              document.getElementById("popular-restaurants").style.display = "none";
                              document.getElementById("top-cuisines").style.display = "none";
                    this.props.sentvalue(e.target.innerHTML);
                  }
                }
                }>
                    <input id="serachBarRestaurant"
                    style={{borderRight:"none"}}
                    className="input is-large is-fullwidth remove-border"
                   onKeyDown={(event)=>{ 
                            if(event.keyCode === 13){
                              this.props.sentvalue(event.target.value);
                              let val = '"'+event.target.value+'"';
                              document.getElementById("messageSearchResult").innerHTML = `Result for ${val}`;
                              document.getElementById("result-search").style.display = "block";
                              document.getElementById("popular-restaurants").style.display = "none";
                              document.getElementById("top-cuisines").style.display = "none";
                            }
                      }}

                    onInput ={(event)=>{
                               actions.closeAllLists();                     
                               let autocompleteTemp = document.createElement("DIV");
                               let search = document.getElementById("autocomplete");
                               autocompleteTemp.setAttribute("class","autocomplete-list");
                               let obj = categories_tab;       
                               for (let i = 0 ; i<obj.length ; i++) {
                                 if(event.target.value.length >= 2 && obj[i].toLowerCase().search(event.target.value.toLowerCase()) != -1){
                                    let word = document.createElement("DIV");
                                    word.innerHTML = `<div><strong class="item">${obj[i]}</strong></div>`;
                                    autocompleteTemp.appendChild(word);
                                 }
                               }
                               document.getElementById("autocomplete").appendChild(autocompleteTemp);
                               
                                
                    }}
                    type="text" name="cusinie" placeholder="Search for restaurants or cuisines"/>

                         

                    
                    <span className="icon is-medium is-left">
                       <i className="fas fa-search"></i>
                      </span>
                    
                </div>
                

                <div className="control" id="filtre">
                   <div className="select dropdown-resto">
                     <select id="list-of-cuisine-category" onChange={(event)=>{
                      let parentSelect = document.getElementById("list-of-cuisine-category");
                      let currentOption = parentSelect.selectedIndex;

                      parentSelect.options[currentOption].disabled = true;
                      let optionId = parentSelect.options[currentOption].id;
                      
                        document.getElementById('field').insertAdjacentHTML('afterbegin',
                          "<a class='button is-primary' id="+optionId+"><span class='icon is-small' onClick={document.getElementById('list-of-cuisine-category').options[this.parentElement.id].removeAttribute('disabled');this.parentElement.remove();}><i class='fas fa-times'></i></span><span id='type-seach-category'></span>"+document.getElementById('list-of-cuisine-category').value+
                          "</a><br/>");
                      }} className="color vertical-bo"  style={{borderLeftColor:"#fff"}}>
                    <option></option>
                    <option id="1" value="Some of our top cuisines">Some of our top cuisines</option>
                   <option id="2" value="Some of our most popular restaurants">Some of our most popular restaurants</option>
                   </select>
                
                  </div>
                </div>
               
                </div>
                 <div>
                 <p class="field" id="field">
                  </p>

                </div>
                

 
 </div>
        </div>
    </div>

</section>
  
  
 )

}
}

//

export  default Restauarntssearch;