const ADDCOUNT = 'REDUX/ADD_COUNT';
const DELETCOUNT = 'REDUX/DELET_COUNT';
const RESETCOUNT = 'REDUX/RESET_COUNT';
const add = e => ({
    type: ADDCOUNT
})
const delet = e => ({
    type: DELETCOUNT
})
const reset = e => ({
    type: RESETCOUNT
})
// dispatch
export const addChange = () => {
    return (dispatch, getState, params) => {
        dispatch(add())
    }
}
export const deletChange = () => {
    return (dispatch, getState, params) => {
        dispatch(delet())
    }
}
export const resetChange = () => {
    return (dispatch, getState, params) => {
        dispatch(reset())
    }
}

//store
export const initialStatecount = {
    count: 0,
}
 
export default (state = initialStatecount, action) => {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                lastUpdate: action.lastUpdate,
                light: !!action.light,
            }
        case ADDCOUNT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DELETCOUNT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESETCOUNT:
            return {
                ...state,
                count: initialStatecount.count,
            }
        default:
            return state
    }
}