import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import countReducer, { initialStatecount } from './count';
import goldReducer, { initialStategold } from './gold';
import githubReducer, { initialStategithub } from './github';
const reducer = combineReducers({
    countReducer,
    goldReducer,
    githubReducer
})
export const initializeStore = (preloadedState = {
    countReducer: initialStatecount,
    goldReducer: initialStategold,
    githubReducer: initialStategithub
}) => {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
