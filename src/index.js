import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {alert('ATENÇÃO!')}
    {alert('Este site ainda está em desenvolvimento :D')}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
