import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Route component={App} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
