import {createStore} from 'redux'

function reducer(state = {foo: 'bar'},action = {}) {
    return state
}

const store = createStore(reducer)

export default store