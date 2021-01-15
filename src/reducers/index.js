import { combineReducers } from 'redux'
import formFillingReducer from './formFillingReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
export default combineReducers({
    formData:formFillingReducer,
    auth:authReducer,
    errors:errorReducer
})

