import React, {Component} from 'react';
import Cart from './containers/CartContainer'
import Products from './containers/ProductsContainer'

class App extends Component {
    render() {
        return (
            <div>
                <h1>shopping Cart Example</h1>
                <hr/>
                <Products></Products>
                <hr/>
                <Cart></Cart>
            </div>
        );
    }
}

export default App;
