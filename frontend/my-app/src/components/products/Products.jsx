import React, {Component} from 'react';
import Product from '../product/Product';
import Nav from '../nav/Nav';
import productsData from '../../data/productdata';
import Naujienos from '../naujienos/Naujienos'


// className vietoj class JSX naudojama.
class Products extends Component{
    constructor(){
        super();
        this.state = {
            products: productsData,
            naujienos: null,
            patiktukai: 0
        };
     //   sitos eilutes apacioj reikia, kitaip bus undefined error.
     this.handleClick = this.handleClick.bind(this);
    }



    handleClick(){
        this.setState(prevState => {
            return {
                patiktukai: prevState.patiktukai+1
            }
        })
    }

    componentDidMount() {
        fetch('https://www.lrytas.lt/static/json/top_readview_2.json')
            .then(response => response.json())
            .then(data => this.setState({naujienos:data}));
    }


    render() {
        const productsComponents = this.state.products.map(product => <Product
            id={product.lol}
            title={product.title}
            desc={product.desc}
            img={product.img}
            link={product.link}
            stock={product.stock}
        />);

        // sita if reikejo pridet, kad iseitu prieti property...
        if (this.state.naujienos === null) return null;
        console.log(this.state.naujienos);
        const naujienusComponents = this.state.naujienos.read.map(naujiena => <Naujienos
            title = {naujiena.title}
            date = {naujiena.date}
            url = {naujiena.url}

        />);


        return (

            <section className="products">
                <p>patiktuktas</p>
                <p onClick={this.handleClick}>Patinka</p>
                <p>{this.state.patiktukai}</p>
                <h1>Naujienos</h1>
                {naujienusComponents}
                {/*{productsComponents}*/}


            </section>

            // {/*<Product*/} vakarykste pamoka, uzkomentuoju.
            // {/*title = "pavadinimas"*/}
            // {/*price = "100"*/}
            // {/*description = "aprasymas assadadsasd"*/}
            // {/*/>*/}
        );
    };

}

export default Products;