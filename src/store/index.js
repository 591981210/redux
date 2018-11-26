import {createStore,combineReducers} from 'redux'
import products from '../reducers/products'
import cart from '../reducers/cart'

const rootReducer = combineReducers({
    products,
    cart
})

// function reducer(state = {foo: 'bar'},action = {}) {
//     return state
// }

const store = createStore(rootReducer)

export default store