import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import products from '../reducers/products'
import cart from '../reducers/cart'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
const logger = createLogger()

const rootReducer = combineReducers({
    products,
    cart
})

// function reducer(state = {foo: 'bar'},action = {}) {
//     return state
// }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk,logger)
    ));

export default store