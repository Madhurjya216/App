import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from 'react-router-dom';
import Store from './store/Store';
import { Provider } from 'react-redux';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-of621czrq5fod487.us.auth0.com"
    clientId="tdpf5q2kBSXrcQyaSuEciQfk0rD3Dxco"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
     <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
)

