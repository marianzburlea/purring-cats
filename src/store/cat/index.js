import { combineReducers } from 'redux'
import { favouriteReducer } from './favourite.reducer'
import { listReducer } from './list.reducer'
import { voteReducer } from './vote.reducer'

const catReducer = combineReducers({
  vote: voteReducer,
  favourite: favouriteReducer,
  list: listReducer,
})

export default catReducer
