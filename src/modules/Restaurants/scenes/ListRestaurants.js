import React, { Component } from 'react';
import Restauarntssearch from '../common/Restaurantssearch';
import RestauarntsList from '../common/RestaurantsList';
import CuisineList from '../common/CuisinesList';
import RestaurantsResult from '../common/RestaurantsResult';
import * as actions from  '../actions';
import { connect } from 'react-redux';
import  Loading from '../../../components/Loader/Loading';
import  {sortBy,filter,includes,has,find} from 'lodash';


/**
 * @class Restaurant component
 * @description Restauarant  header to  export  header  for the  restauarnts
 */

const SORTS_RESULT_Restaurant = {
    NONE:list=>list,
    NAME:list=>sortBy(list,function(item){
        return item.restaurant.name;
    }),
    NAME_FIND:(list,word)=>
        filter(list,function(item){
        return includes(item.restaurant_name.toLowerCase(),word.toLowerCase());
    })
   
}
const SORTS_RESULT_Cuisine = {
    NONE:list=>list,
    NAME:list=>sortBy(list,function(item){
        return item.list_category.toString();
    }),
    NAME_FIND:(list,word)=>
        filter(list,function(item){
        return includes(item.list_category.toString().toLowerCase(),word.toLowerCase());
    })
   
}

 class ListRestauarnts  extends Component {

    componentDidMount() {
        var fadeTarget = document.getElementById("fadeffect");
        fadeTarget.style.opacity = 1;
        fadeTarget.style.display = "inherit";
        window.scrollTo(0, 0);
        
        this.props.onload(this.props.match.params.zipcode,null);
   
        this.setState({nameCity:this.props.match.params.zipcode});

            
      }

      componentDidUpdate(prevProps, prevState) {
        
       if(prevProps == undefined) {
           return false
       }
       console.log(this.state.nameCity);

       if (this.state.nameCity !== this.props.match.params.zipcode) {
          
        this.props.onload(this.props.match.params.zipcode,null);
        this.setState({nameCity:this.props.match.params.zipcode})
       }


    }



      constructor(props){
        super(props);
        this.state = {
            posts: [],
            sortvalue:"",
            nameCity:""
        }
        this.timeout =  0;
        this.restaurant = "loading";
     }
   


   
    


   LoadRestaurant= ()=>{
   }

   onSortvalue = (values) => {
     
   var data = this.props.data ;
   this.setState({sortvalue:values});
  

   }


        render(){


            var data = this.props.data || [];
            
            if (this.props.loading) {
                return (
                    <div className="container">
                      <div className="columns">
                      <div className="column">
                        <div className=" has-text-centered loading-padding ">   
                     
                        <Loading />
                        </div>
                      </div>
                     
                      </div>
                    </div>
                    
                  
                )
            } else {
               this.restaurant = SORTS_RESULT_Restaurant['NAME_FIND'](data,this.state.sortvalue).map((data) => (
                    
                    <RestauarntsList
                        key={data.id}
                        title={data.restaurant_name}
                        price={data.prices}
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
             this.cuisines = SORTS_RESULT_Cuisine['NAME_FIND'](data,this.state.sortvalue).map((data) => (
                    
                    <CuisineList
                        key={data.id}
                        cuisine={data.postcode}
                        cat={data.list_category[1]}
                        image={data.image}
                        id= {data.id}
            
                    />
                   
                )
                );
              this.searchResult1 = SORTS_RESULT_Restaurant['NAME_FIND'](data,this.state.sortvalue).map((data) => (

                    <RestauarntsList
                        key={data.id}
                        title={data.restaurant_name}
                        price={data.prices}
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
          this.searchResult2 = SORTS_RESULT_Cuisine['NAME_FIND'](data,this.state.sortvalue).map((data) => (

                              <RestauarntsList
                                key={data.id}
                                title={data.restaurant_name}
                                price={data.prices}
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

            }  

            return(
                <div>
                    
                     <Restauarntssearch
                      sentvalue={this.onSortvalue}
                     />
                
         <section className="section-food">
          
         <div className="container food-list">
        

          <div id="result-search">
            <h1 className="food-heading" id="messageSearchResult">Result "Not found"</h1>
             <div className="columns is-multiline">

                    
                   {this.searchResult1}{this.searchResult2}

                <div className="container">
                   <div className="columns">
                      <div className="column ">
                        <button className=" load-more button btn-fun-co-load-more  ">
                            See  more
                         </button>
                      </div>
                  </div>

                  </div>

            </div></div>



            <div id="popular-restaurants">
             <h1 className="food-heading" >Some of our most popular restaurants</h1>
             <div className="columns is-multiline">

                    
                   {this.restaurant}

                <div className="container">
                   <div className="columns">
                      <div className="column ">
                        <button className=" load-more button btn-fun-co-load-more  ">
                            See  more
                         </button>
                      </div>
                  </div>

                  </div>

            </div></div>

   

              

   
            <div id="top-cuisines">
              <h1 className="food-heading" >Some of our top cuisines</h1>
             <div className="columns is-multiline">

                    
                    {this.cuisines}

                     <div className="container">
                         <div className="columns">
                              <div className="column ">
                               <button className=" load-more button btn-fun-co-load-more  ">
                                See  more
                             </button>
                        </div>
                         </div>

       </div>

            </div></div>




        </div>
       
      
       
       </section>
       </div>

            )
        }

 

}



const mapStateToProps = state => {
    return {
    loading:state.loadReducer.loading,
    autherror:state.loadReducer.error,
    data:state.loadReducer.data
    }
  };
 
   const mapDispatchToProps = dispatch => ({
    onload: (location, cuisine) => dispatch(actions.Load_Restaurant(location,cuisine))
   });





export  default  connect(mapStateToProps,mapDispatchToProps)(ListRestauarnts);