import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
 
import { rootReducer } from './rootReducer'; 

//Import the root reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root_fungry_storage',
  blacklist: ['registerReducer','deliveryReducer','adminProfileReducer','ResetReducer','contactReducer'],
  storage,
 
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 



export  const   store = createStore(persistedReducer, composeEnhancers( applyMiddleware(thunk)));
export  const   persistor = persistStore(store)



