import React, { Component } from 'react';
import ManageOrdersheader from '../common/ManageOrdersheader';


/**
 * @class ManageOrder  component
 * @description Manageorder  to  export  header  for the  restauarnts
 */


 class ManageOrder  extends Component {

    render(){
             
        return(
            <div>
                   <ManageOrdersheader/>


                    <section className="section-manage">
          <div className="container">
             <h1 className="manage-heading">
                      Manage orders 
                  </h1>
              
                 
                  
<div className="tabs is-centered  is-boxed is-medium" id="tab_header">
  <ul>
    <li className="item is-active" data-option="1"><a> <b className="order-numb-tabs"> 1 </b>New orders</a></li>
    <li className="item" data-option="2"><a> <b className="order-numb-tabs"> 8 </b> Pending  orders</a></li>
    <li className="item" data-option="3"><a> <b className="order-numb-tabs"> 12 </b> Ready orders</a></li>
  </ul>
</div>
<div className="box tab_box" id="tab_container">
  <div className="container_item is-active" data-item="1">
   <div className="columns box element-box">
       <div className="column is-half order-manage-tabs">
           <h1 className="order-manage-tabs-heading">
               ORDER 0139
           </h1>
           
           <p>
2XMuseau vinaigrette
  </p>
  <p>
      2XFaux-fillet sauce moutarde

  </p>
  <p>
      1xFrite

  </p>
  <p>
      2XMousse chocolat

  </p>
         
       </div>
       <div className="column is-half ">
            <h1 className="order-manage-tabs-heading-comment ">
               Comment
           </h1>
           <br/>
           <p className="order-manage-p">
               I woud like a veggie faux-fillet
           </p>
           
           <br/>
           <a href="" className="button btn-fun-li"> Decline</a>
           <a href="" className="button btn-fun-li"> Accept</a>
           
       </div>
   </div>
   <div className="columns box element-box">
       <div className="column is-half order-manage-tabs">
           <h1 className="order-manage-tabs-heading">
               ORDER 0139
           </h1>
           
           <p>
2XMuseau vinaigrette
  </p>
  <p>
      2XFaux-fillet sauce moutarde

  </p>
  <p>
      1xFrite

  </p>
  <p>
      2XMousse chocolat

  </p>
         
       </div>
       <div className="column is-half ">
            <h1 className="order-manage-tabs-heading-comment ">
               Comment
           </h1>
           <br/>
           <p className="order-manage-p">
               I woud like a veggie faux-fillet
           </p>
           
           <br/>
           <a href="" className="button btn-fun-li"> Decline</a>
           <a href="" className="button btn-fun-li"> Accept</a>
           
       </div>
   </div>
   
   
  </div>
  
  
  <div className="container_item" data-item="2"> 
    
     <div className="columns box element-box">
       <div className="column is-half order-manage-tabs">
           <h1 className="order-manage-tabs-heading">
               ORDER 0139
           </h1>
           
           <p>
2XMuseau vinaigrette
  </p>
  <p>
      2XFaux-fillet sauce moutarde

  </p>
  <p>
      1xFrite

  </p>
  <p>
      2XMousse chocolat

  </p>
         
       </div>
       <div className="column is-half ">
            <h1 className="order-manage-tabs-heading-comment ">
               Comment
           </h1>
           <br/>
           <p className="order-manage-p">
               I woud like a veggie faux-fillet
           </p>
           
           <br/>
           <a href="" className="button btn-fun-li">Ready</a>
           
       </div>
   </div>
   <div className="columns box element-box">
       <div className="column is-half order-manage-tabs">
           <h1 className="order-manage-tabs-heading">
               ORDER 0139
           </h1>
           
           <p>
2XMuseau vinaigrette
  </p>
  <p>
      2XFaux-fillet sauce moutarde

  </p>
  <p>
      1xFrite

  </p>
  <p>
      2XMousse chocolat

  </p>
         
       </div>
       <div className="column is-half ">
            <h1 className="order-manage-tabs-heading-comment ">
               Comment
           </h1>
           <br />
           <p className="order-manage-p">
               I woud like a veggie faux-fillet
           </p>
           
           <br />
           <a href="" className="button btn-fun-li"> Ready</a>
         
           
       </div>
   </div>
   
    
  </div>
  <div className="container_item" data-item="3">
   
    <div className="columns box element-box">
       <div className="column is-half order-manage-tabs">
           <h1 className="order-manage-tabs-heading">
               ORDER 0139
           </h1>
           
           <p>
2XMuseau vinaigrette
  </p>
  <p>
      2XFaux-fillet sauce moutarde

  </p>
  <p>
      1xFrite

  </p>
  <p>
      2XMousse chocolat

  </p>
         
       </div>
       <div className="column is-half ">
            <h1 className="order-manage-tabs-heading-comment ">
               Comment
           </h1>
           <br/>
           <p className="order-manage-p">
               I woud like a veggie faux-fillet
           </p>
           
           <br/>
           <a href="" className="button btn-fun-li"> Delivered</a>
           
       </div>
   </div>
   <div className="columns box element-box">
       <div className="column is-half order-manage-tabs">
           <h1 className="order-manage-tabs-heading">
               ORDER 0139
           </h1>
           
           <p>
2XMuseau vinaigrette
  </p>
  <p>
      2XFaux-fillet sauce moutarde

  </p>
  <p>
      1xFrite

  </p>
  <p>
      2XMousse chocolat

  </p>
         
       </div>
       <div className="column is-half ">
            <h1 className="order-manage-tabs-heading-comment ">
               Comment
           </h1>
           <br/>
           <p className="order-manage-p">
               I woud like a veggie faux-fillet
           </p>
           
           <br/>
           <a href="" className="button btn-fun-li">Delivered</a>
           
       </div>
   </div>
   
   
  </div>
</div>            
              </div>
        
      </section>
       

            </div>
        )
    }
}

export default ManageOrder;