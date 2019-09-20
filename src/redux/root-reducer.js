import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'

//a function from redux that combines individual reducersto form the root reducer
export default combineReducers({
    user: userReducer
})