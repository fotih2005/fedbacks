import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/nav/nav'
import Main from './components/main/main'
import './components/container/container.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container wrapper'>
      <Nav />
      <Main />
    </div>
  </React.StrictMode>
);
