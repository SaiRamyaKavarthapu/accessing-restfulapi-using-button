import RootReducer from '../reducers/listReducer';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

export const middleware=[ReduxThunk];
export const applywithmiddleware=applyMiddleware(...middleware)(createStore);
export const store=applywithmiddleware(RootReducer);
export default store;