import * as actionType from '../../stores/actions/actionTypes'


const initialState = {
    movies: []
}

const FetchMoviesReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.FETCH_MOVIES:
            return{
                ...state,
                movies: state.movies.push(action.payload)
            }
        default:
            return state
    }
}

export default FetchMoviesReducer