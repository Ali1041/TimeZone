import {combineReducers} from 'redux';
import reducer from './reducers';

const rootReducers=combineReducers({reducer:reducer})
export default rootReducers;