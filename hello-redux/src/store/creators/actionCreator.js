import * as actionType from '../actions/actionTypes'


export const incrementCounter = () => {
    return {
        type: actionType.INCREMENT
    }
}

export const decrementCounter = () => {
    return{
        type: actionType.DECREMENT
    }
}

export const addCounter = (value) => {
    return{
        type: actionType.ADD,
        payload: value
    }
}

export const subtractCounter = (value) => {
    return{
        type: actionType.SUBTRACT,
        payload: value
    }
}