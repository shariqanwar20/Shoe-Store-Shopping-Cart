import React from 'react'
import { useParams } from 'react-router-dom'
import shoes from '../shoes.json'
export const ProductItem = () => {
    let { shoeId } = useParams();

    let shoe = shoes[shoeId];
    return (
        <div>
            <h2>{shoe.name}</h2>
            <img src={shoe.img} alt={shoeId}/>
        </div>
    )
}
