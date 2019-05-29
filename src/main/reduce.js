import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer';

const rootReducer = combineReducers({
    tudo: todoReducer
})

export default rootReducer