import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import { store, persistor } from './redux/store';
import { reducer } from "./reducers/index";
import App from './App';

import './style/index.css';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}