import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibility'

export default combineReducers({
  todos,
  visibilityFilter
})
