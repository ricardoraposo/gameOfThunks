import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import apiReducer from './reducers/apiReducer';

const store = createStore(apiReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
