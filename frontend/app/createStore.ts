import {createStore} from 'redux';
import RootReducer from '../src/Reducer/RootReducer'
import state from './State';

export default createStore(RootReducer, state);
