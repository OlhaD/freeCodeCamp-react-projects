import {combineReducers} from 'redux'
import defaultReducer from './defaultReducer'
import drumPadReducer from './drumPad'

export default combineReducers({
  default: defaultReducer,
  drumPad: drumPadReducer,
})