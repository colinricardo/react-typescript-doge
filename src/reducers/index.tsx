import { combineReducers } from 'redux';
import enthusiasmReducer from './enthusiasmReducer';

const rootReducer = combineReducers({
  enthusiasmState: enthusiasmReducer,
});

export default rootReducer;
