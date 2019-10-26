import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import * as serviceWorker from './serviceWorker'
import reducers from './reducers'

const store = createStore(reducers)

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), 
document.getElementById('app'))

serviceWorker.unregister()
