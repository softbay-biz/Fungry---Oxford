import React, { Component } from 'react';



const Restaurant = (props) => {
    return (
        <div className="columns box element-box">
            <div className="column is-half order-manage-tabs">
                <h1 className="order-manage-tabs-heading">
                    Restaurant Name :{props.name}
    </h1>

                <p>
                    Address line 1 : {props.addressline1}
                </p>
                <p>
                    Address line 2 : {props.addressline2}
               </p>
                <p>
                    Post code :{props.postcode}

                </p>
                <p>
                    Main contact : {props.restphonenumber}

                </p>
                <p>
                    phone number :{props.phonenumber}

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