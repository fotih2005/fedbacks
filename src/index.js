import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/container/container.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CommentSingle from './pages/comment-single/comment-single';
import Data from './assets/data';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className='container'>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/single/:id' element={<CommentSingle data={Data}/> } />
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);
