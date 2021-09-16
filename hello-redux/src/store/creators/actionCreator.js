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

export const addTask = (task) => {
    return{
        type: actionType.ADDTASK,
        payload: task
    }
}

export const randomImg = (url) => {
    return{
        type: actionType.RANDOMIMG,
        payload: url
    }
}

export const fetchPosts = () => {

    return async (dispatch) => {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await response.json()
        dispatch({
            type: actionType.FETCH_POSTS,
            payload: posts
        })
    }
}