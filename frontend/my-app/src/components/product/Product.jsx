import React, {Component} from 'react';

function Product(props){
    return (
        <div className="product">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    )
}


export default Product;