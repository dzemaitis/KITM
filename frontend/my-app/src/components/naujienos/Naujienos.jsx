import React, {Component} from 'react';
import styles from './naujienos.css';
import ProductsData from '../products/Products'
function Aside(props){ //galima ir class naudot arba funkcija kaip siuo atveju
    return(
        <aside>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.url}</p>
        </aside>
    )
}

export default Aside;