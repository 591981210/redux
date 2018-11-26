import {connect} from 'react-redux'
import Cart from '../components/Cart'

const getCartProducts = state => {
    return state.cart.items.map(cartItem => {
        const prod = state.products.all.find(item => item.id === cartItem.id)
        return {
            id: prod.id,
            title:prod.title,
            price:prod.price,
            quantity:cartItem.quantity,
        }
    })
}

const getTotalPrice = state=>{
    return getCartProducts(state).reduce((total,prod)=>{
        return total + prod.price * prod.quantity
    },0)
}

function mapStateToProps(state) {
    return {
        cartProducts: getCartProducts(state),
        totalPrice:getTotalPrice(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart)


export default CartContainer