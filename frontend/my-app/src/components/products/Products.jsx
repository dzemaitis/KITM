import React, {Component} from 'react';
import Product from '../product/Product';
import Nav from '../nav/Nav';


// className vietoj class JSX naudojama.
function Products(){
    return(
        <Product
        title = "pavadinimas"
        price = "100"
        description = "aprasymas assadadsasd"
        />
    )

}

export default Products;