import * as actionType from '../../stores/actions/actionTypes'


const initialState = {
    favorites: [],
}

const FavoriteMoviesReducer = (state=initialState, action) => {
    switch(action.type){
        case actionType.ADD_FAVORITE:
            return{
                ...state,
                favorites: state.favorites.concat(action.payload)
            }
    
        default:
            return state
    }
}

export default FavoriteMoviesReducer