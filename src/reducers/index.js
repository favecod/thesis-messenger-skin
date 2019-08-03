import { combineReducers } from 'redux'
import myProfile from './myProfile'
import userProfile from './userProfile'
import view from './view'

export default combineReducers({
    myProfile,
    userProfile,
    view,
})