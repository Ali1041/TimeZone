import thunk from 'redux-thunk';
import {applyMiddleware,createStore} from 'redux';
import rootReducers from '../reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware=[thunk]
const store = createStore(rootReducers,composeWithDevTools(applyMiddleware(...middleware)));
export default store;