import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react';
import store from './store/index';

ReactDOM.render( 
    <React.StrictMode >
        <Provider  store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)