import React from 'react';
import ReactDOM from 'react-dom';
import {Auth0Provider} from '@auth0/auth0-react'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider domain="cristianpanontini.eu.auth0.com" clientId="B2G5xcKkGsoP5t6eBgUXi2bg9GXlv2qD" redirectUri={window.location.origin}>
    <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
