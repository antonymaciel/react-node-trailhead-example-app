import { combineReducers } from 'redux'
import trails from './trails'
import options from './options'
import user from './user'

export default combineReducers ({
  trails,
  options,
  user,
})
