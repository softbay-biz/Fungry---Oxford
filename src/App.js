import React, { Component } from 'react';
import  Layout  from './components/Layout/Layout';
import Routes from './config/routes.js';
import  {connect} from 'react-redux';
import * as actions  from  './modules/Loginclient/actions';
import * as actionsP  from  './modules/Restaurantsprofile/actions';
import  {Bulma}  from './assets/js/main';
//import './assets/js/bulma-steps.min'


class App extends Component {
 
  componentDidMount(){
    this.props.OnTryAutoSignIn();
    this.props.getItems();

  }

  render() {

    return ( 
      <Layout>
        <Routes/>
      </Layout>
  

  
    )
  }

 
}

const mapDispatchToProps = dispatch => {

  return{
    OnTryAutoSignIn:() => dispatch(actions.authCheckState()),
    getItems :() =>dispatch(actionsP.getCart())

  }

}



 export default connect(null,mapDispatchToProps)(App);