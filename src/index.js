import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './App/store'
import {Provider} from 'react-redux'
import './css/base.css'
import './css/modal.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
