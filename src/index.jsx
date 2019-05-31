import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import promise from  'redux-promise'
import App from './main/app'
import reducers from './main/reduce'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers,devTools)
const element = document.getElementById('app')
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
,element)
