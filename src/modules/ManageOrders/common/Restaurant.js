import React, { Component } from 'react';



const Restaurant = (props) => {
    return (
        <div className="columns box element-box">
            <div className="column is-half order-manage-tabs">
                <h1 className="order-manage-tabs-heading">
                    Dish :{props.dish}
    </h1>

                <p>
                    quantity: {props.quantity}
                </p>
                <p>
                    schedeul : {props.schedeul}
               </p>
                <p>
                    Post code :{props.postcode}

                </p>
                <p>
                    

                </p>
                

            </div>
            <div className="column is-half ">
                <h1 className="order-manage-tabs-heading-comment ">
                    Note
                </h1>
                <br />
                <p className="order-manage-p">
                    No Note    </p>

                <br />
                <a onClick={()=>{
                    props.remove_account(props.email);
                    window.location.reload();

                }} className="button btn-fun-li"> Decline</a>
                <a onClick={()=>{
                    props.accept_account(props.email);
                   
                }} className="button btn-fun-li"> Accept</a>
             
    
            </div>
        </div>

    )

}




export  default  Restaurant;