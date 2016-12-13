import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TodoSocketListeners from './socket-listeners/todos'
import App from './App'
import './index.css'

let store = createStore(todoApp)

TodoSocketListeners(store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
