import React, { Component } from 'react';






const Deliveryperson = (props) => {

    return (
        <div className="columns box element-box">
            <div className="column is-half order-manage-tabs">
                <h1 className="order-manage-tabs-heading">
                   Firestname : {props.firstname}
                </h1>

                <p>
                  Lastname  : {props.lastname}
                </p>
    
                <p>
                   Phonenumer : {props.phonenumber}

                </p>

            </div>
            <div className="column is-half ">
                <h1 className="order-manage-tabs-heading-comment ">
                    Motivation
    </h1>
                <br />
                <p className="order-manage-p">
                    {props.motivation}
                </p>

                <br />
                <a onClick={()=>{
                    props.remove_account(props.email);
                    window.location.reload();

                }} className="button btn-fun-li"> Decline</a>
                <a onClick={() => {
                    props.accept_account(props.email);
                    window.location.reload();

                }} className="button btn-fun-li"> Accept</a>

            </div>
        </div>


    )
}

export default  Deliveryperson;