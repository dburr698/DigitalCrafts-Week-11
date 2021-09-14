import * as actionType from '../actions/actionTypes'


const initialState = {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADDTASK:
            return{
                ...state,
                tasks: state.tasks.concat(action.payload)
            }

        default: 
            return state
    }
}


export default taskReducer