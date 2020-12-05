import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import '../App.css';
import shoes from '../shoes.json';
import { ProductItem } from './ProductItem';

export const Products = () => {
    return (
        <div className="parentDiv">
            {Object.entries(shoes).map(([keyName, {name, img}]) => {
                return(
                    <Link to={`${keyName}`} element={<ProductItem />} key={keyName} className="childDiv">
                        <h5>{name}</h5>
                        <img src={img} alt={keyName} height="300px"/>
                    </Link>
                )
            })}
            <Outlet />
        </div>
    )
}
