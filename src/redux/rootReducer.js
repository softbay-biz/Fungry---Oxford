import { combineReducers } from 'redux';
import authReducer  from '../modules/Loginclient/reducer';
import pageReducer  from '../modules/Home/reducer';
import registerReducer from  '../modules/Registerclient/reducer';
import  deliveryReducer from '../modules/Deliveryperson/reducer';
import  restaurantReducer from '../modules/Restaurant/reducer';
import  loadReducer from '../modules/Restaurants/reducer';
import  load_validate_Reducer from '../modules/Restaurantdashboard/reducer';
import  contactReducer  from  '../modules/Contactus/reducer';
import  loadMenuReducer  from  '../modules/Restaurantsprofile/reducer';
import  adminProfileReducer  from  '../modules/RestaurantsAminprofile/reducer';
import  profileReducer  from  '../modules/profile/reducer';
import  setReducer  from  '../modules/Utile/reducer';
import  ResetReducer  from  '../modules/ForgotPass/reducer';


export const rootReducer = combineReducers({
       authReducer:authReducer,
       pageReducer:pageReducer,
       registerReducer:registerReducer,
       deliveryReducer:deliveryReducer,
       restaurantReducer:restaurantReducer,
       contactReducer:contactReducer,
       loadReducer:loadReducer,
       loadMenuReducer:loadMenuReducer,
       load_validate_Reducer:load_validate_Reducer,
       profileReducer:profileReducer,
       adminProfileReducer:adminProfileReducer,
       setReducer:setReducer,
       ResetReducer:ResetReducer
})
