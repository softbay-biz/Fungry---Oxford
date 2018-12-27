import React, { Component } from 'react';
import ManageOrdersheader from '../common/ManageOrdersheader';
import Deliveryperson from '../common/Deliveryperson';
import Restaurant from '../common/Restaurant';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actiondash from '../../Restaurantdashboard/actions';


/**
 * @class ManageOrder  component
 * @description Manageorder  to  export  header  for the  restauarnts
 */



class ManageAccount extends Component {
    constructor() {
        super();
        this.state = {
            pageNum: 1
        }
    };

    addState = () => {
        this.setState({ pageNum: 1 });

    }
    subState = () => {
        this.setState({ pageNum: 2 });

    }

    componentDidMount() {
        this.props.getaccounts();


    }




    render() {

        var restaurant_amount = 0;
        var delivery_amount = 0;
        var Restaurant_Account = "NO NEW RESTAURANT  ACCOUNT";
        var Delivery = "NO NEW DELIVERY ACCOUNT";

        if (this.props.validation_accounts !== null && this.props.validation_accounts.users !== undefined) {
            restaurant_amount = Object.keys(this.props.validation_accounts.users.restaurant).length;
            delivery_amount = Object.keys(this.props.validation_accounts.users.delivery_person).length;

            if (restaurant_amount !== 0) {
                var server_da = this.props.validation_accounts.users.restaurant;
                Restaurant_Account = Object.entries(server_da).map((data) => (
                    <Restaurant
                        key={data[1].id_members}
                        name={data[1].restaurant_name}
                        addressline1={data[1].address_line_1}
                        addressline2={data[1].address_line_2}
                        postcode={data[1].postcode}
                        email={data[1].email}
                        restphonenumber={data[1].restaurant_phone_number}
                        phonenumber={data[1].phone_number}
                        {...this.props}
                    />

                ));
            }

            if (delivery_amount !== 0) {

                var server_data = this.props.validation_accounts.users.delivery_person;

                Delivery = Object.entries(server_data).map((data) => (
                    <Deliveryperson
                        key={data[1].id_members}
                        firstname={data[1].first_name}
                        lastname={data[1].last_name}
                        email={data[1].email}
                        motivation={data[1].motivation}
                        phonenumber={data[1].phone_number}
                        {...this.props}
                    />

                ));
            }
        }

        return (
            <div>


                <section className="section-manage">
                    <div className="container">
                        <h1 className="manage-heading">
                            Manage Accounts
                  </h1>



                        <div className="tabs is-centered  is-boxed is-medium" id="tab_header">
                            <ul>
                                <li className={"item  " + (this.state.pageNum === 1 ? "is-active" : "")} onClick={this.addState} ><a > <b className="order-numb-tabs">{restaurant_amount} </b>New Restaurant</a></li>
                                <li className={"item  " + (this.state.pageNum === 2 ? "is-active" : "")} onClick={this.subState} ><a> <b className="order-numb-tabs"> {delivery_amount} </b>New Delivery person</a></li>
                            </ul>
                        </div>
                        <div className="box tab_box" id="tab_container">
                            <div className={"container_item  " + (this.state.pageNum === 1 ? "is-active" : "")} id="WebDev" data-item="1">


                                {Restaurant_Account}

                            </div>


                            <div className={"container_item  " + (this.state.pageNum === 2 ? "is-active" : "")} id="WebDev1" data-item="2">



                                {Delivery}

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
        currentPage: state.pageReducer.page,
        IsloginedIn: state.authReducer.token,
        amount: state.loadMenuReducer.cart,
        account_type: state.authReducer.userInfo,
        validation_accounts: state.load_validate_Reducer.account
    }
};
const mapDispatchToProps = dispatch => ({
    getaccounts: () => dispatch(actiondash.validation()),
    accept_account: (email) => dispatch(actiondash.validation_account(email)),
    remove_account: (email) => dispatch(actiondash.delete_account(email))
});



export default connect(mapStateToProps, mapDispatchToProps)(ManageAccount);