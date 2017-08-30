import { createStore, applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import thunk from 'redux-thunk';

let middleware = [thunk];

export default function configureStore(initialState = {}) {
	return createStore(
		AppReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}
