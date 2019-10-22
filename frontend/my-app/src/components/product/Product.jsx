import React, {Component} from 'react';

function Product(props){
    return (
        <div className="product">
            <h3>{props.id}</h3>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <p>{props.img}</p>
            <p>{props.link}</p>
            <p>{props.stock}</p>
        </div>
    )
}

// key = {product.id}
// title = {product.title}
// desc = {product.desc}
// img = {product.img}
// link = {product.link}



export default Product;