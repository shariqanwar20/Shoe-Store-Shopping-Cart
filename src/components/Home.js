import React from 'react'
import '../App.css';
import shoes from '../shoes.json';

export const Home = () => {
    return (
        <div className="parentDiv">
            {Object.entries(shoes).map(([keyName, {name, img}]) => {
                return(
                    <div key={keyName} className="childDiv">
                        <h5>{name}</h5>
                        <img src={img} alt={keyName} height="300px"/>
                    </div>
                )
            })}
        </div>
    )
}
