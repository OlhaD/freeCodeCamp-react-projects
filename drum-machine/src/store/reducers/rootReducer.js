import {combineReducers} from 'redux'
import drumPadReducer from './drumPad'

export default combineReducers({
  drumPad: drumPadReducer,
})