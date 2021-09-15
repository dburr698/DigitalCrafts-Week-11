
const initialState = {
    randomImages: []
}

const randomImageReducer = (state=initialState, action) => {
    switch(action.type){
        case 'RANDOMIMG':
            return{
                ...state,
                randomImages: state.randomImages.concat(action.payload)
            }
        default:
            return state
    }
}

export default randomImageReducer