import * as shop from '../api/shop'
import * as types from '../constants/ActionTypes'
export const reciveProducts = products => ({
    type: types.RECIVE_PRODUCTS,
    products
})

export const addToCart = product => {
    return {
        type: types.ADD_TO_CART,
        product
    }
}

//这部分是 thunk 写法,thunk 用来执行异步操作
export const getAllProducts = () => dispatch => {
    shop.cbAllProducts(products => {
        dispatch(reciveProducts(products))
    })
}

export const setCheckoutStatus = status => ({
    type: types.SET_CHECKOUT_STATUS,
    status
})

export const setCartItems = items => ({
    type: types.SET_ITMES,
    items
})
export const checkout = (products) => dispath => {
    //1.备份购物车数据
    const savedCartProducts = [...products]
    //2.清空结算状态
    dispath(setCheckoutStatus(null))
    //3.清空购物车
    dispath(setCartItems([]))
    //4.执行结算操作
    shop.buyProducts(
        products,
        () => dispath(setCheckoutStatus('successful')),
        () => {
            dispath(setCheckoutStatus('failed'))
            dispath(setCartItems(savedCartProducts))
        }
    )

}