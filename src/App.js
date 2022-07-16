import React, { useEffect, useState } from 'react';
import './components/container/container.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CommentSingle from './pages/comment-single/comment-single';


function App () {

    const [users, SetUser] = useState([])
    
   useEffect(() => {
        fetch("http://localhost:3001/productRequests")
        .then(res => res.json())
        .then(dat => SetUser(dat))
   }, [])

    return(
    <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/single/:id' element={<CommentSingle data={users}/> } />
    </Routes>
    )
}

export default App