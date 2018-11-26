import React,{Component}from 'react'


class Products extends  Component {
    render() {
        const {foo} = this.props
        return (
            <div>
                <h2>Products</h2>
                <p>{foo}</p>
            </div>
        )
    }
}

export  default Products