import * as actionType from '../actions/actionTypes'


const initialState = {
    posts: []
}

const PostsReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionType.FETCH_POSTS:
            return{
                ...state,
                posts: action.payload
            }
        
        default:
            return state
    }
}

export default PostsReducer