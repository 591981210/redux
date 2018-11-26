import * as shop from '../api/shop'

export const reciveProducts = products =>({
    type:'RECIVE_PRODUCTS',
    products
})
//这部分是 thunk 写法,thunk 用来执行异步操作
export const getAllProducts = () => dispatch => {
    shop.getAllProducts(products => {
        dispatch(reciveProducts(products))
    })
}