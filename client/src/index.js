import React from 'react';
import ReactDOM from 'react-dom'; // Old import for React 17


import { Provider} from 'react-redux'
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const store=createStore(reducers,compose);
const container = document.getElementById('root');
ReactDOM.render(
    <Provider>
<App />
    </Provider>,
container); // Use render method in React 17
