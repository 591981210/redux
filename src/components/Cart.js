import React,{Component}from 'react'


class Cart extends  Component {
    render() {
        const {cartProducts,totalPrice} = this.props
        return (
            <div>
                <h2>Cart</h2>
                <ul>
                    {cartProducts.map(item => (
                        <li key={item.id}>
                            {item.title} - {item.price} * {item.quantity}
                        </li>
                    ))}
                </ul>
                <p>total:{totalPrice}</p>
            </div>
        )
    }
}

export  default Cart