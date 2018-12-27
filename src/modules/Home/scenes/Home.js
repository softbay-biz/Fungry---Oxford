import React, { Component } from 'react';
import Homeheader from '../common/Homeheader';
import  {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from  '../actions';
import * as actionsresto from  '../../Restaurants/actions';
import TopResto from '../common/topmeu';
import TopCuisine from '../common/topCuisines';



/**
 * @class Footer
 * @description Footer  page shared by all interface/views
 */


 class Home  extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
     
        this.props.pageType("Home");
        this.props.onload("me",null);


        var fadeTarget = document.getElementById("fadeffect");
        fadeTarget.style.opacity = 0;
        fadeTarget.style.display ="none";
        window.onscroll = function() {
         if (window.pageYOffset > 200){
            fadeTarget.style.opacity = 1;
            fadeTarget.style.display = "inherit";

        }else {
         fadeTarget.style.opacity = 0;
         fadeTarget.style.display ="none";

         }
       };
      }
     componentWillUnmount() {
        window.onscroll = null;
        this.props.pageType(null);
        var fadeTarget = document.getElementById("fadeffect");
        fadeTarget.style.opacity = 1;

        fadeTarget.style.display = "inherit";


      }

     render(){

        var data = this.props.data || [];
        var TopRestos ="";
        var TopCuisines ="";  
        if (this.props.loading) {
            TopRestos ="Loading ...";
            TopCuisines ="Loading ...";
        } else {
            if(this.props.data !== null && Object.values(this.props.data) !== null && this.props.data  !== undefined) {
                let tab =Object.values(data).slice(0, 3);
                console.log(tab);
            TopRestos  =tab.map((data) => (

                
                <TopResto
                    key={data.id}
                    name={data.restaurant_name}
                    price={data.rangeType}
                    currency={data.postcode}
                    cuisine={data.postcode}
                    cat={data.list_category[1]}
                    cat2={data.list_category[2]}
                    cat3={data.list_category[0]}
                    image={data.image}
                    id= {data.id}
                    clicked={ ()=> this.LoadRestaurant()} 
        
                />
               
            )
            );
 TopCuisines  =tab.map((data) => (

                
                <TopCuisine
                    key={data.id}
                    name={data.restaurant_name}
                    price={data.rangeType}
                    currency={data.postcode}
                    cuisine={data.postcode}
                    cat={data.list_category[0]}
                    image={data.image}
                    id= {data.id}
                    clicked={ ()=> this.LoadRestaurant()} 
        
                />
               
            )
            );
            }

        } 





        return(

        
         <div>


        <section className="section bg-intro" id="intro">  
                <Homeheader/>  
          </section>      
  
            <section className="section-hero">
                <div className="container">
                    <div className="columns">
                        <div className="column is-4 text-hero">
                            
                        <img src={require('../../../assets/img/heart.png')} alt="" className="icon-hero"/>
                        
                        <h2>
                            WHY ORDER WITH FUNGRY
                        </h2>
                        <p>
                            Dominion man second spirit he earth they're creeping
                        </p>
                        </div>
                           <div className="column is-4  text-hero">
                            
                        <img src={require('../../../assets/img/stars.png')} alt="" className="icon-hero"/>
                        
                        <h2>
                           AN EASY TO USE WEB PLATFORM
                        </h2>
                        <p>
                            Dominion man second spirit he earth they're creeping
                        </p>
                        </div>
                           <div className="column is-4 text-hero">
                            
                        <img src={require('../../../assets/img/hour.png')} alt="" className="icon-hero" />
                        
                        <h2>
                           TRACK YOUR ORDER IN REAL TIME
                        </h2>
                        <p>
                            Dominion man second spirit he earth they're creeping
                        </p>
                        </div>
                        
            
                    </div>
            
            
                </div>
            
            </section>
              
              
          
              
              <section className="section-restaurants ">
                  
                  <div className="container">
                     <h2 className="heading-resto heading-aligment">Some of our most voted restaurants</h2>
                      <div className="columns is-multiline">
                          
                         {TopRestos}
                          
                      </div>
                 </div>
               </section>
              <section className="section-restaurants ">
                  
                  <div className="container">
                     <h2 className="heading-resto heading-aligment">Some of our top cuisines</h2>
                      <div className="columns is-multiline">
                          
                         {TopCuisines}
                          
                      </div>
                 </div>
               </section>
              
            
              <section className="section-bike">
                
                     <div className="container">
                         <div className="columns">
                             <div className="column is-6  postion-rest">
                              <h2>
                                  Your restaurant on Fungry
                              </h2>
                              
                              <p>
                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida sit amet risus vel vehicula. Nunc ultricies malesuada ante, vel egestas ante egestas vel. 
                              </p>
                              <h3>
                           <Link to="/RegisterRestaurant" className="bike-started">
                                      Getting Started >>
                                 </Link>                  
                                 </h3>
                             </div>
                             
                             <div className="column is-6 ">
                               <h2>
                                 Got a bike? Deliver with Fungry 
                              </h2>
                              
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida sit amet risus vel vehicula. Nunc ultricies malesuada ante, vel egestas ante egestas vel.  
                              </p>
                              <h3>
                                 <Link to="/RegisterDelivery" className="bike-started">
                                      Getting Started >>
                                 </Link>
                              </h3>
                            
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
    loading:state.loadReducer.loading,
    data:state.loadReducer.data
    }
  };
 
 
 
   const mapDispatchToProps = dispatch => ({
    pageType: (page) => dispatch(actions.currentPage(page)),
    onload: (location, cuisine) => dispatch(actionsresto.Load_Restaurant(location,cuisine))
   });




 export  default connect(mapStateToProps,mapDispatchToProps)(Home);