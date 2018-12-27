import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './styles/bulma.css';
import './styles/animate.css';
import './styles/main.css';
import  './styles/responsive.css';
import  './styles/bulma-extensions.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import  {Bulma}  from './assets/js/functions';


const app = (
<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
   <App />
 </PersistGate>
</Provider>

);

ReactDOM.render(
app
, document.getElementById('root'));


registerServiceWorker();
