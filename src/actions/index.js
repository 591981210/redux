import * as shop from '../api/shop'

export const reciveProducts = products => ({
    type: 'RECIVE_PRODUCTS',
    products
})

export const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        product
    }
}

//这部分是 thunk 写法,thunk 用来执行异步操作
export const getAllProducts = () => dispatch => {
    shop.cbAllProducts(products => {
        dispatch(reciveProducts(products))
    })
}

export const handleAddToCart = product => dispatch => {
    dispatch(addToCart(product))
}