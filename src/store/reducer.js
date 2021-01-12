import { combineReducers } from 'redux'
import catReducer from './cat'

const reducer = combineReducers({
  cat: catReducer
})

export default reducer
