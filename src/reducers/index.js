import { combineReducers } from 'redux'
import authReducer from './auth'
import navReducer from './nav'

const AppReducer = combineReducers({
    auth: authReducer,
    nav: navReducer,
});

export default AppReducer;
