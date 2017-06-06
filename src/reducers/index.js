import { combineReducers } from 'redux'
import PadReducer from './PadReducer'
import UserReducer from './UserReducer'

const reducers = combineReducers({
    PadReducer,
    UserReducer
})

export default reducers