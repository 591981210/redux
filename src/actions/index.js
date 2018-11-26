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

export const setCheckoutStatus = status => ({
    type: 'SET_CHECKOUT_STATUS',
    status
})

export const setCartItems = items => ({
    type: 'SET_ITMES',
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