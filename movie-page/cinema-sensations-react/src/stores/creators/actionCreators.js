
import * as actionType from '../actions/actionTypes'

export const addToFavorites = (movie) => {
    return{
        type: actionType.ADD_FAVORITE,
        payload: movie
    }
}