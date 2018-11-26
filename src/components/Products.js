import React, {Component} from 'react'


class Products extends Component {
    render() {
        const {products} = this.props
        return (
            <div>
                <h2>Products</h2>
                <ul>
                    {/*{products.map(item =>(<li key={item}>{item}</li>))}*/}
                </ul>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(()=>{
            this.props.getAllProducts()
        },1000)
    }
}

export default Products