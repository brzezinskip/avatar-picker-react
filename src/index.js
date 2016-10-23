import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import './assets/styles/index.css';

window.__app_container = document.getElementById('root');
ReactDOM.render(
  <App />,
  window.__app_container
);
