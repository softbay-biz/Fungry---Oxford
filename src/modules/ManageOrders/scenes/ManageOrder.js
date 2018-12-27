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


 class ManageOrder  extends Component {
    constructor() {
        super();
        this.state = {
            pageNum: 1
        }
    };
    componentDidMount(){
        if(this.props.account_type.id_members !== undefined){
            let id = parseInt(this.props.account_type.id_members)
         this.props.Orders(id);
        }
      

       console.log(this.props.orders);

      //  var evtSource = new EventSource("//api.example.com/ssedemo.php", { withCredentials: true } ); 


}


    addState = () => {
        this.setState({ pageNum: 1 });

    }
    subState = () => {
        this.setState({ pageNum: 2 });

    }





    render() {

        var restaurant_amount = 0;
        var delivery_amount = 0;
        var Restaurant_Account = "NO NEW ORDER";
        var orders_amount = 0;

        var Delivery = "NO NEW PENDING ORDER";

        if (this.props.orders!== null ) {
            orders_amount = Object.keys(this.props.orders).length;
            restaurant_amount = Object.keys(this.props.orders).length;
            delivery_amount = Object.keys(this.props.orders).length;

            if (orders_amount !== 0) {
                let server_da = this.props.orders;
                // console.log(server_da);
                let i=0;
                Restaurant_Account = Object.values(this.props.orders).map((data) => (
                    <Restaurant
                        key={i++}
                        name={data.dish}
                        
                        postcode={data.postcode}
                        schedeul={data.shedule}
                        quantity={data.quantity}
                       
                       
                        {...this.props}
                    />

                ));
            }

            if (orders_amount!== 0) {

                var server_data = this.props.orders;
                let i=0;
                Delivery = Object.values(server_data).map((data) => (
                    <Restaurant
                    key={i++}
                    name={data.dish}
                    
                    postcode={data.postcode}
                    schedeul={data.shedule}
                    quantity={data.quantity}
                   
                   
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
                            Manage  Orders
                  </h1>



                        <div className="tabs is-centered  is-boxed is-medium" id="tab_header">
                            <ul>
                                <li className={"item  " + (this.state.pageNum === 1 ? "is-active" : "")} onClick={this.addState} ><a > <b className="order-numb-tabs">{restaurant_amount} </b>New Orders</a></li>
                                <li className={"item  " + (this.state.pageNum === 2 ? "is-active" : "")} onClick={this.subState} ><a> <b className="order-numb-tabs"> {delivery_amount} </b>Pending Orders</a></li>
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
        validation_accounts: state.load_validate_Reducer.account, 
        orders:state.load_validate_Reducer.orders
    }
};
const mapDispatchToProps = dispatch => ({
    getaccounts: () => dispatch(actiondash.validation()),
    accept_account: (email) => dispatch(actiondash.validation_account(email)),
    remove_account: (email) => dispatch(actiondash.delete_account(email)),
    Orders:(id) => dispatch(actiondash.Orders())
});

export default  connect(mapStateToProps, mapDispatchToProps)(ManageOrder);