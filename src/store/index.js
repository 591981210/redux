import {createStore} from 'redux'

function redcuer(state = {foo: 'bar'}.action = {}) {
    return state
}

const store = createStore(redcuer)

export default store