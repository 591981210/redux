const initialState = {
    all: [],
    foo:'bar'
}

const all = (state=initialState.all,action)=>{
    return state
}

export default (state = initialState, action) => {
    return {
        all:all(state,action)
    }
}

