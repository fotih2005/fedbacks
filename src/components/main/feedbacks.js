import React, { useEffect, useState } from 'react';
import Eror from '../eror/eror'

import Card from './card'

function RenderCards () {

    const [card, SetCard] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3001/productRequests")
        .then(res => res.json())
        .then(dat => SetCard(dat))
    },[])

    return (
        <>
            {
                card.map(user => <Card key={user.id} id={user.id} title={user.title} upvotes={user.upvotes} content={user.description} category={user.category}/>)
            }
        </>
    )
}
export default RenderCards