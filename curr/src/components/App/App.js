import React, {Component} from 'react';
import './App.css';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            currency: null,
            answer: null,
            value: '',
        };
        this.convert = this.convert.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        fetch('https://currencyapi.net/api/v1/currencies?key=72d657671ab1fe6d467c4f7056475526dd01')
            .then(response => response.json())
            .then(currency => this.setState({currency: currency}))
    }

    // handleChange(event){
    //     this.setState({
    //         value: event.target.value
    //     });
    // }

    // convert(event){
    //     event.preventDefault();
    // }

    render() {
        let curr = null;
        if(this.state.currency){
            curr = Object.keys(this.state.currency.currencies).map( (key)=>
                <option>{key}</option>
            );
        }


        return(
            <main>
                <form onSubmit={this.convert}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <select name="cars">
                        {curr}
                    </select>
                        <input type="submit" />
                </form>
            </main>
        )
    }
}

export default App;

