import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/container/container.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='container'>
      <App/>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
